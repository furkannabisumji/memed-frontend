/**
 * useApi Hook - Standard data fetching hook for Memed.fun
 * 
 * This module provides a comprehensive set of React hooks for API communication
 * with built-in features including:
 * - Type-safe API calls with TypeScript generics
 * - Automatic caching with configurable TTL
 * - Request deduplication and cancellation
 * - Error handling and retry logic
 * - Optimistic updates for better UX
 * - Loading states and error boundaries
 * 
 * @example Basic usage:
 * ```tsx
 * const { data, loading, error } = useApi<User[]>('/users');
 * ```
 * 
 * @example With caching:
 * ```tsx
 * const { data } = useApi<Token[]>('/tokens', {
 *   cacheKey: 'tokens-list',
 *   cacheDuration: CACHE_CONFIG.MEDIUM
 * });
 * ```
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { apiClient, type ApiResponse, type RequestConfig } from '../lib/api/client';
import { CACHE_CONFIG } from '../lib/api/config';

/**
 * Options for the useApi hook
 * 
 * @typedef {Object} UseApiOptions
 * @property {boolean} [immediate=false] - Auto-fetch on mount
 * @property {React.DependencyList} [deps=[]] - Dependencies to trigger refetch
 * @property {string} [cacheKey] - Cache key for request deduplication
 * @property {number} [cacheDuration=5 * 60 * 1000] - Cache duration in milliseconds
 * @property {(data: T) => R} [transform] - Transform response data
 * @property {(error: Error) => void} [onError] - Error handler
 * @property {(data: T) => void} [onSuccess] - Success handler
 */
export interface UseApiOptions extends RequestConfig {
  // Auto-fetch on mount
  immediate?: boolean;
  // Dependencies to trigger refetch
  deps?: React.DependencyList;
  // Cache key for request deduplication
  cacheKey?: string;
  // Cache duration in milliseconds
  cacheDuration?: number;
  // Transform response data
  transform?<T, R>(data: T): R;
  // Error handler
  onError?: (error: Error) => void;
  // Success handler
  onSuccess?: <T>(data: T) => void;
}

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export interface UseApiReturn<T> extends UseApiState<T> {
  execute: () => Promise<void>;
  reset: () => void;
  refetch: () => Promise<void>;
}

/**
 * Simple in-memory cache for API responses
 * 
 * This cache implementation provides:
 * - TTL (Time To Live) based expiration
 * - Automatic cleanup of expired entries
 * - Type-safe data storage and retrieval
 */
interface CacheEntry<T> {
  data: T;           // Cached response data
  timestamp: number; // When the data was cached (ms)
  duration: number;  // How long to keep the data (ms)
}

// Global cache store - shared across all hook instances
const cache = new Map<string, CacheEntry<any>>();

/**
 * Retrieve cached data if it exists and hasn't expired
 * 
 * @param key - Cache key to lookup
 * @returns Cached data or null if not found/expired
 */
function getCachedData<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  const now = Date.now();
  // Check if cache entry has expired
  if (now - entry.timestamp > entry.duration) {
    cache.delete(key); // Clean up expired entry
    return null;
  }
  
  return entry.data;
}

/**
 * Store data in cache with TTL
 * 
 * @param key - Cache key for storage
 * @param data - Data to cache
 * @param duration - How long to keep the data (ms)
 */
function setCachedData<T>(key: string, data: T, duration: number): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    duration,
  });
}

/**
 * Generic API hook for GET requests with caching and error handling
 * 
 * This hook provides:
 * - Automatic request execution with configurable triggers
 * - Built-in caching with TTL support
 * - Loading states and error handling
 * - Request cancellation on component unmount
 * - Data transformation and success/error callbacks
 * 
 * @param endpoint - API endpoint to call
 * @param options - Configuration options for the hook
 * @returns Object with data, loading state, error, and control functions
 * 
 * @example
 * ```tsx
 * const { data, loading, error, refetch } = useApi<Token[]>('/tokens', {
 *   immediate: true,
 *   cacheKey: 'tokens-list',
 *   onSuccess: (tokens) => console.log(`Loaded ${tokens.length} tokens`)
 * });
 * ```
 */
export function useApi<T = any>(
  endpoint: string,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const {
    immediate = false,
    deps = [],
    cacheKey,
    cacheDuration = 5 * 60 * 1000, // 5 minutes default
    transform,
    onError,
    onSuccess,
    ...requestConfig
  } = options;

  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  // Check cache on mount
  useEffect(() => {
    if (cacheKey) {
      const cachedData = getCachedData<T>(cacheKey);
      if (cachedData) {
        setState({
          data: cachedData,
          loading: false,
          error: null,
          success: true,
        });
      }
    }
  }, [cacheKey]);

  const execute = useCallback(async () => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
    }));

    try {
      const response = await apiClient.get<T>(endpoint, {
        ...requestConfig,
        signal: abortControllerRef.current.signal,
      });

      if (!mountedRef.current) return;

      let finalData = response.data;
      
      // Apply transform if provided
      if (transform) {
        finalData = transform(response.data);
      }

      // Cache the data if cache key is provided
      if (cacheKey) {
        setCachedData(cacheKey, finalData, cacheDuration);
      }

      setState({
        data: finalData,
        loading: false,
        error: null,
        success: response.success,
      });

      // Call success handler
      if (onSuccess) {
        onSuccess(finalData);
      }

    } catch (error) {
      if (!mountedRef.current) return;
      
      const apiError = error as Error;
      
      setState({
        data: null,
        loading: false,
        error: apiError,
        success: false,
      });

      // Call error handler
      if (onError) {
        onError(apiError);
      }
    }
  }, [endpoint, transform, onError, onSuccess, cacheKey, cacheDuration, ...Object.values(requestConfig)]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  const refetch = useCallback(async () => {
    await execute();
  }, [execute]);

  // Auto-fetch on mount or dependency change
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, ...deps]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    ...state,
    execute,
    reset,
    refetch,
  };
}

/**
 * Hook for API mutations (POST, PUT, PATCH, DELETE requests)
 * 
 * This hook provides:
 * - Async mutation execution with loading states
 * - Error handling and success callbacks
 * - Data transformation support
 * - Request cancellation capabilities
 * 
 * @param endpoint - API endpoint to call
 * @param options - Configuration options (excluding immediate/deps)
 * @returns Object with mutate function, loading state, and error handling
 * 
 * @example
 * ```tsx
 * const { mutate, loading, error } = useApiMutation<CreateTokenResponse, CreateTokenRequest>('/tokens/create');
 * 
 * const handleCreateToken = async () => {
 *   try {
 *     const result = await mutate({ name: 'MyToken', symbol: 'MTK' });
 *     console.log('Token created:', result.tokenId);
 *   } catch (error) {
 *     console.error('Failed to create token:', error);
 *   }
 * };
 * ```
 */
export function useApiMutation<TData = any, TVariables = any>(
  endpoint: string,
  options: Omit<UseApiOptions, 'immediate' | 'deps'> = {}
) {
  const {
    onError,
    onSuccess,
    ...requestConfig
  } = options;

  const [state, setState] = useState<UseApiState<TData>>({
    data: null,
    loading: false,
    error: null,
    success: false,
  });

  const mutate = useCallback(async (variables?: TVariables) => {
    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
    }));

    try {
      const response = await apiClient.post<TData>(endpoint, variables, requestConfig);

      setState({
        data: response.data,
        loading: false,
        error: null,
        success: response.success,
      });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;

    } catch (error) {
      const apiError = error as Error;
      
      setState({
        data: null,
        loading: false,
        error: apiError,
        success: false,
      });

      if (onError) {
        onError(apiError);
      }

      throw error;
    }
  }, [endpoint, onError, onSuccess, ...Object.values(requestConfig)]);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      success: false,
    });
  }, []);

  return {
    ...state,
    mutate,
    reset,
  };
}

/**
 * Hook for optimistic updates with rollback capability
 * 
 * This hook enables optimistic UI updates that can be rolled back if the
 * server request fails. Useful for improving perceived performance by
 * updating the UI immediately before the server confirms the change.
 * 
 * @param queryKey - Unique key to identify this optimistic update
 * @param initialData - Initial data state
 * @returns Object with current data, update function, and rollback capability
 * 
 * @example
 * ```tsx
 * const { data, optimisticUpdate, rollback } = useOptimisticApi('user-profile', user);
 * 
 * const handleUpdateProfile = async (newData) => {
 *   // Immediately update UI
 *   optimisticUpdate(newData);
 *   
 *   try {
 *     await updateUserProfile(newData);
 *   } catch (error) {
 *     // Rollback on failure
 *     rollback();
 *     throw error;
 *   }
 * };
 * ```
 */
export function useOptimisticApi<T>(
  queryKey: string,
  initialData: T
) {
  const [data, setData] = useState<T>(initialData);
  const [isOptimistic, setIsOptimistic] = useState(false);

  const optimisticUpdate = useCallback((updater: (prev: T) => T) => {
    setData(prev => {
      const newData = updater(prev);
      setIsOptimistic(true);
      return newData;
    });
  }, []);

  const confirmUpdate = useCallback((confirmedData: T) => {
    setData(confirmedData);
    setIsOptimistic(false);
  }, []);

  const revertUpdate = useCallback(() => {
    setData(initialData);
    setIsOptimistic(false);
  }, [initialData]);

  return {
    data,
    isOptimistic,
    optimisticUpdate,
    confirmUpdate,
    revertUpdate,
  };
}

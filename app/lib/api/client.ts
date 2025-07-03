import { getApiConfig } from './config';

/**
 * HTTP API Client for Memed.fun Platform
 *
 * Provides a centralized, production-ready HTTP client with automatic retries,
 * timeout handling, error normalization, and environment-aware configuration.
 *
 * Features:
 * - 🔄 Exponential backoff retry logic
 * - ⏱️ Request timeout and cancellation
 * - 🛡️ Normalized error handling
 * - 🔧 Environment-based configuration
 * - 📊 Type-safe response handling
 *
 * @example
 * ```typescript
 * const tokens = await apiClient.get<Token[]>('/tokens');
 * const newToken = await apiClient.post('/tokens', { name: 'MyToken' });
 * ```
 */

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

export interface RequestConfig extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

/**
 * HTTP API Client with retry logic, timeout handling, and error normalization
 */
class ApiClient {
  private readonly baseURL: string;
  private readonly defaultTimeout: number;
  private readonly defaultRetries: number;
  private readonly defaultRetryDelay: number = 1000;

  constructor(baseURL?: string) {
    const config = getApiConfig();
    
    this.baseURL = baseURL || config.baseUrl;
    this.defaultTimeout = config.timeout;
    this.defaultRetries = config.retries;
  }

  // ==========================================
  // Private Utility Methods
  // ==========================================

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async fetchWithTimeout(
    url: string, 
    config: RequestConfig
  ): Promise<Response> {
    const { timeout = this.defaultTimeout, ...fetchConfig } = config;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        ...fetchConfig,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  // ==========================================
  // Core Request Method with Retry Logic
  // ==========================================

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const {
      retries = this.defaultRetries,
      retryDelay = this.defaultRetryDelay,
      ...requestConfig
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    
    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...requestConfig.headers,
    };

    let lastError: Error;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await this.fetchWithTimeout(url, {
          ...requestConfig,
          headers,
        });

        // Handle HTTP errors
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || 
            errorData.error || 
            `HTTP ${response.status}: ${response.statusText}`
          );
        }

        const data = await response.json();
        
        // Normalize response format
        if (data && typeof data === 'object' && 'success' in data) {
          return data as ApiResponse<T>;
        }
        
        return {
          data,
          success: true,
        };

      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on certain errors
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            throw new Error('Request timeout');
          }
          
          // Don't retry 4xx errors (client errors)
          if (error.message.includes('HTTP 4')) {
            throw error;
          }
        }

        // Wait before retry (except on last attempt)
        if (attempt < retries) {
          await this.delay(retryDelay * Math.pow(2, attempt)); // Exponential backoff
        }
      }
    }

    throw lastError!;
  }

  // ==========================================
  // Public HTTP Methods
  // ==========================================

  async get<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(
    endpoint: string, 
    data?: any, 
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(
    endpoint: string, 
    data?: any, 
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(
    endpoint: string, 
    data?: any, 
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

// Singleton instance
export const apiClient = new ApiClient();

// Export for custom instances if needed
export { ApiClient };

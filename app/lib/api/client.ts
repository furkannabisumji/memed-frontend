/**
 * Centralized HTTP API Client for Memed.fun Platform
 * 
 * This module provides a robust, production-ready HTTP client with:
 * 
 * 🔄 **Automatic Retry Logic**:
 *   - Exponential backoff for failed requests
 *   - Configurable retry attempts and delays
 *   - Smart retry logic (only retries appropriate errors)
 * 
 * ⏱️ **Timeout & Cancellation**:
 *   - Request timeout handling
 *   - AbortController support for request cancellation
 *   - Prevents memory leaks from abandoned requests
 * 
 * 🛡️ **Error Handling**:
 *   - Normalized error responses
 *   - HTTP status code handling
 *   - Network error detection and recovery
 * 
 * 🔧 **Configuration**:
 *   - Environment-aware base URL configuration
 *   - Customizable headers and request options
 *   - Development vs production optimizations
 * 
 * 📊 **Response Normalization**:
 *   - Consistent response format across all endpoints
 *   - Type-safe response handling with generics
 *   - Success/error state management
 * 
 * @example Basic Usage:
 * ```typescript
 * const response = await apiClient.get<Token[]>('/tokens');
 * console.log(response.data); // Type-safe token array
 * ```
 * 
 * @example With Custom Config:
 * ```typescript
 * const response = await apiClient.post<CreateTokenResponse>('/tokens/create', {
 *   name: 'MyToken',
 *   symbol: 'MTK'
 * }, {
 *   timeout: 15000,
 *   retries: 5
 * });
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

class ApiClient {
  private baseURL: string;
  private defaultTimeout: number = 10000; // 10 seconds
  private defaultRetries: number = 3;
  private defaultRetryDelay: number = 1000; // 1 second

  constructor(baseURL?: string) {
    this.baseURL = baseURL || this.getBaseURL();
  }

  private getBaseURL(): string {
    // Environment-specific API base URLs
    if (import.meta.env.VITE_API_BASE_URL) {
      return import.meta.env.VITE_API_BASE_URL;
    }
    
    // Default based on environment
    if (import.meta.env.DEV) {
      return 'http://localhost:3001/api'; // Development API
    }
    
    return 'https://api.memed.fun'; // Production API
  }

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

  // HTTP Methods
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

import React from 'react';

interface Web3ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface Web3ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

export class Web3ErrorBoundary extends React.Component<
  Web3ErrorBoundaryProps,
  Web3ErrorBoundaryState
> {
  constructor(props: Web3ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Web3ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Web3 Error Boundary caught an error:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, retry }: { error?: Error; retry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-red-50 border border-red-200 rounded-lg">
      <div className="text-red-600 text-center">
        <h3 className="font-semibold text-lg mb-2">Web3 Connection Error</h3>
        <p className="text-sm mb-4">
          {error?.message || 'Something went wrong with the wallet connection.'}
        </p>
      </div>
      <button
        onClick={retry}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

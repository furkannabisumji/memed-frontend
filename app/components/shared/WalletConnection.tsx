import { ConnectKitButton } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';
import { useState } from 'react';

export function WalletConnection() {
  const { address, isConnected, status } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      await disconnect();
    } finally {
      setIsDisconnecting(false);
    }
  };



  return (
    <div className="flex flex-col items-center gap-4 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Wallet Connection</h2>
      
      {isConnected ? (
        <div className="text-center">
          <p className="text-green-600 font-semibold mb-2">✅ Wallet Connected</p>
          <p className="text-sm text-gray-600 mb-4 font-mono break-all">
            Address: {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
          <button
            onClick={handleDisconnect}
            disabled={isDisconnecting}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isDisconnecting ? 'Disconnecting...' : 'Disconnect'}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Connect your wallet to get started</p>
          {status === 'connecting' && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span className="text-sm text-blue-600">Connecting...</span>
            </div>
          )}
          <div className="min-h-[50px] flex items-center justify-center">
            <ConnectKitButton />
          </div>
          <p className="text-xs text-gray-400 mt-2">If you don't see a button above, check the browser console for errors</p>
        </div>
      )}
    </div>
  );
}

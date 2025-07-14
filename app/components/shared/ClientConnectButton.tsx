"use client";

import { useEffect, useState } from 'react';
import { ConnectKitButton } from 'connectkit';

export function ClientConnectButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-32 bg-gray-800 rounded-lg animate-pulse" />;
  }

  return <ConnectKitButton />;
}
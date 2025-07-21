import { toast } from "sonner";
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronRightIcon, LinkIcon } from "lucide-react";

// Assuming these types based on usage since the original file was not provided.
interface Account {
  username: {
    localName: string;
  };
}

interface TokenData {
  exists: boolean;
}

export default function ConnectProfile({
  setStep,
  selectedAccount,
}: {
  setStep: (step: number) => void;
  selectedAccount: Account | null;
}) {
  const [isLoadingTokenData, setIsLoadingTokenData] = useState(true);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);

  useEffect(() => {
    setIsLoadingTokenData(true);
    // Simulate fetching token data
    setTimeout(() => {
      // To test the case where a user already has a token,
      // you can simulate an account with a token.
      if (selectedAccount?.username.localName === "userwithtoken") {
        setTokenData({ exists: true });
      } else {
        setTokenData(null);
      }
      setIsLoadingTokenData(false);
    }, 1000);
  }, [selectedAccount]);

  if (isLoadingTokenData) {
    return (
      <div className="p-8   flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-neutral-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-neutral-900 border border-neutral-800 text-white">
      <h1 className="mb-6 text-3xl font-black text-white">
        Connect Your Lens Profile
      </h1>
      <p className="mb-8 text-lg text-gray-400">
        To create a meme token, you&apos;ll need to connect your Lens Account.
        This will allow you to mint tokens and earn from engagement.{" "}
        <strong>NOTE:</strong> each lens account can only have one meme token.
      </p>

      <div className="flex flex-col justify-center md:justify-between gap-4 md:flex-row">
        <Link to="/accounts">
          <button className="px-4 py-2  hover:shadow-2xl rounded-md cursor-pointer shadow-none flex gap-2  text-black bg-green-500 hover:bg-green-700">
            <LinkIcon />
            Connect Lens Account
          </button>
        </Link>

        {!tokenData && (
          <button
            className="px-4 py-2 gap-2 bg-primary text-white hover:shadow-2xl border flex  rounded-md border-white cursor-pointer hover:bg-primary-dark"
            onClick={() => setStep(2)}
          >
            Next <ChevronRightIcon />
          </button>
        )}
        {tokenData && (
          <p className="text-lg text-gray-400">You already have a meme token</p>
        )}
      </div>
    </div>
  );
}

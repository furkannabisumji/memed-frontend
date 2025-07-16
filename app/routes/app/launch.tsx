import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

import ConnectProfile from "../../components/app/launch/ConnectProfile";
import CreateMemeForm from "@/components/app/launch/CreateMemeForm";
import TokenSettingForm from "../../components/app/launch/TokenSettingForm";

export default function LaunchPage() {
  // Dummy data for selectedAccount and accounts
  const selectedAccount = {
    username: {
      localName: "dummyuser",
    },
  };
  const accounts = [selectedAccount];

  // Dummy functions for wallet and chain interactions
  const signWithConnectKit = async (message: string) => {
    console.log("Simulating signWithConnectKit with message:", message);
    return "dummy_signature";
  };
  const address = "0xDummyAddress";
  const chain = { id: 1 }; // Simulate mainnet

  const showToast = (message: string) => {
    alert(message); // Simple alert for demonstration
  };

  const [memeImage, setMemeImage] = useState<string | null>("");
  const [step, setStep] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [memeTitle, setMemeTitle] = useState<string>("");
  const [memeDescription, setMemeDescription] = useState<string>("");
  const [memeSymbol, setMemeSymbol] = useState<string>("");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleMint = async () => {
    if (!address) {
      showToast("Wallet not connected");
      return;
    }

    if (!selectedAccount?.username.localName) {
      showToast("No Lens handle selected");
      return;
    }

    setIsMinting(true);

    // Simulate chain check and switch
    if (chain && chain?.id !== 1) {
      // Assuming 1 is mainnet
      console.log("Simulating chain switch");
      // switchToChain(TransactionType.accountCreation);
    }
    try {
      // Generate timestamp
      const timestamp = Date.now();
      const handle = selectedAccount.username.localName;

      // Create message
      const message = `Mint meme for handle: ${handle} at ${timestamp}`;
      const signature = await signWithConnectKit(message);

      console.log(
        {
          name: memeTitle,
          ticker: memeSymbol,
          description: memeDescription,
          image: memeImage,
          message,
          signature,
          timestamp,
        },
        `Simulating API call to mintMemeCoins/${handle}`,
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setShowSuccess(true);

      // Simulate confetti
      console.log("Simulating confetti");

      console.log("Minting successful");
    } catch (error) {
      console.error("Minting error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to mint meme coins. Please try again.",
      );
    } finally {
      setIsMinting(false);
    }
  };

  if (showSuccess) {
    return (
      <>
        <div className="min-h-screen ">
          <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
          />
          <div className="container px-4 py-12 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 text-3xl text-white bg-green-600 rounded-full">
                ✨
              </div>
              <h1 className="mb-6 text-5xl font-black ">Meme Created!</h1>
              <p className="mb-8 text-xl text-neutral-600">
                Your meme has been successfully tokenized and is now live on the
                blockchain.
              </p>

              <div className="p-8 mb-8 bg-neutral-900 ">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  {memeImage && (
                    <img
                      src={`${import.meta.env.VITE_LIGHTHOUSE_GATEWAY}${memeImage}`}
                      alt="Your meme"
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
                <h2 className="mb-2 text-2xl font-bold">{memeTitle} Token</h2>
                <p className="mb-4 text-white">
                  ${memeSymbol} • 1,000,000,000 supply
                </p>
                <div className="flex justify-center gap-4">
                  <Link to={`/explore`}>
                    <button className="px-4 py-2 gap-2 border-2 border-neutral-800 rounded-md text-white  hover:shadow-2xl cursor-pointer">
                      View on Explorer
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/launch">
                  <button
                    className="px-4 py-2 w-full gap-2 cursor-pointer hover:shadow-2xl border-2 border-neutral-800 text-white rounded-md sm:w-auto"
                    onClick={() => {
                      setShowSuccess(false);
                      setStep(1);
                      setMemeImage(null);
                    }}
                  >
                    Create Another Meme
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="container relative z-10 px-4 py-12 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Step Content */}
            <div
              key={step}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -20 }}
              // transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <ConnectProfile
                  setStep={setStep}
                  selectedAccount={selectedAccount}
                />
              )}
              {step === 2 && (
                <CreateMemeForm
                  memeImage={memeImage}
                  setMemeImage={setMemeImage}
                  handlePrevStep={handlePrevStep}
                  handleNextStep={handleNextStep}
                  memeTitle={memeTitle}
                  setMemeTitle={setMemeTitle}
                  memeDescription={memeDescription}
                  setMemeDescription={setMemeDescription}
                  memeSymbol={memeSymbol}
                  setMemeSymbol={setMemeSymbol}
                />
              )}
              {step === 3 && (
                <TokenSettingForm
                  handlePrevStep={handlePrevStep}
                  handleMint={handleMint}
                  isMinting={isMinting}
                  memeImage={memeImage}
                  memeSymbol={memeSymbol}
                  setMemeSymbol={setMemeSymbol}
                  memeTitle={memeTitle}
                  setMemeTitle={setMemeTitle}
                  memeDescription={memeDescription}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

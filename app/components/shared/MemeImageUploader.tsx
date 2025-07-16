import { type Dispatch, type SetStateAction, useState } from "react";
import { toast } from "sonner";
import lighthouse from "@lighthouse-web3/sdk";

interface MemeImageUploaderProps {
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
}

export default function MemeImageUploader({
  image,
  setImage,
}: MemeImageUploaderProps) {
  const [loading, setLoading] = useState(false);

  const uploadToLighthouse = async (file: File) => {
    // Reset any previous state
    setLoading(true);

    // Dismiss any existing toasts first
    toast.dismiss();

    // Create a unique ID for this upload toast
    const uploadingToastId = `uploading-image-${Date.now()}`;

    // Show loading toast
    toast.loading("Uploading your image...", {
      id: uploadingToastId,
      description: "Please wait while we upload your image",
      duration: 0, // Don't auto-dismiss
    });

    try {
      const filesArray = [file];
      const { data } = await lighthouse.upload(
        filesArray,
        import.meta.env.VITE_LIGHTHOUSE_KEY as string,
      );
      const uploadedImageUrl = `${data.Hash}`;
      console.log("Uploading", uploadedImageUrl);

      setImage(uploadedImageUrl);

      // Dismiss loading toast and show success
      toast.dismiss(uploadingToastId);
      toast.success("Your image has been uploaded successfully", {
        description: "Image uploaded",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error uploading file:", error);

      // Dismiss loading toast and show error
      toast.dismiss(uploadingToastId);
      toast.error("There was a problem uploading your image", {
        description: "Upload failed",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadToLighthouse(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadToLighthouse(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer h-64 bg-neutral-800"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => document.getElementById("file-input")?.click()}
    >
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-white"></div>
          <p className="mt-2 text-gray-400">Uploading...</p>
        </div>
      ) : image ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={`${import.meta.env.VITE_LIGHTHOUSE_GATEWAY}${image}`}
            alt="Uploaded meme"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mb-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <p className="text-center text-gray-400 mb-2">
            Drag and drop your meme image here
          </p>
          <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
        </>
      )}
      <input
        id="file-input"
        type="file"
        accept="image/png, image/jpeg, image/gif"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

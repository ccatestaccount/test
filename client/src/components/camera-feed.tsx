import { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { X, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CameraFeedProps {
  onClose: () => void;
}

export function CameraFeed({ onClose }: CameraFeedProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const { toast } = useToast();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setHasPermission(true);
      })
      .catch((error) => {
        setHasPermission(false);
        toast({
          variant: "destructive",
          title: "Camera Error",
          description:
            error.name === "NotAllowedError"
              ? "Camera access was denied. Please grant permission to use your camera."
              : "Could not access camera. Please ensure your device has a working camera.",
        });
      });
  }, [toast]);

  const capturePhoto = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Create a link element and trigger download
        try {
          const link = document.createElement('a');
          link.href = imageSrc;
          link.download = `photo-${new Date().toISOString().replace(/:/g, '-')}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          toast({
            title: "Photo Captured",
            description: "Your photo has been saved to your downloads folder.",
          });
        } catch (error) {
          console.error("Error saving photo:", error);
          toast({
            variant: "destructive",
            title: "Error Saving Photo",
            description: "There was a problem saving your photo. Please try again.",
          });
        }
      }
    }
  };

  if (hasPermission === false) {
    return (
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Camera Access Required</h3>
        <p className="text-sm text-gray-400">
          Please enable camera access in your browser settings to use this feature.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-50 hover:bg-white/10"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        {hasPermission && (
          <Webcam
            ref={webcamRef}
            audio={false}
            className="w-full h-full object-cover"
            mirrored
            screenshotFormat="image/jpeg"
          />
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full border-2 border-white hover:bg-white/10 transition-colors duration-200"
          onClick={capturePhoto}
        >
          <Camera className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
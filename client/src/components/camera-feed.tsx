import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CameraFeedProps {
  onClose: () => void;
}

export function CameraFeed({ onClose }: CameraFeedProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
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
            audio={false}
            className="w-full h-full object-cover"
            mirrored
            screenshotFormat="image/jpeg"
          />
        )}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Camera } from "lucide-react";
import { CameraFeed } from "@/components/camera-feed";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <Button
        variant="outline"
        size="icon"
        className="w-20 h-20 rounded-full border-2 border-white hover:bg-white/10 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <Camera className="h-10 w-10" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black border-white/20">
          <CameraFeed onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

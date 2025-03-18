import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Camera } from "lucide-react";
import { CameraFeed } from "@/components/camera-feed";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-black">
      <Button
        variant="outline"
        size="icon"
        className="w-20 h-20 rounded-full border-2 border-white hover:bg-white/10 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <Camera className="h-10 w-10" />
      </Button>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">Hungry? Here's a link to DoorDash</h2>
        <Button
          variant="outline"
          className="border-2 border-white hover:bg-white/10 transition-colors duration-200"
          onClick={() => window.open('https://www.doordash.com', '_blank')}
        >
          Open DoorDash
        </Button>
        <div className="w-[800px] h-[600px] border-2 border-white/20 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.doordash.com" 
            className="w-full h-full"
            title="DoorDash"
          />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black border-white/20">
          <CameraFeed onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
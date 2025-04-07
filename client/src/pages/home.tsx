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
        <h2 className="text-2xl font-semibold text-white">Feeling kind? Here's a link to Donate to starving kids in africa!</h2>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-white hover:bg-white/10 transition-colors duration-200 px-8 py-6 text-lg"
          onClick={() => window.open('https://www.feedthechildren.org', '_blank', 'noopener,noreferrer')}
        >
          donate to starving kids →
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black border-white/20">
          <CameraFeed onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

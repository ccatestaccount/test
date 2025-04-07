import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function TitleScreen() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 bg-black">
      <h1 className="text-8xl font-bold text-white tracking-widest animate-fade-in">jasean rice</h1>
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-white hover:bg-white/10 transition-colors duration-200 px-8 py-6 text-xl tracking-wider"
        onClick={() => setLocation("/home")}
      >
        ENTER →
      </Button>
    </div>
  );
}

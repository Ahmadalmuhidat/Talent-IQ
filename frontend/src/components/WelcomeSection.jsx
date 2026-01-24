import { useUser } from "@clerk/clerk-react";
import {
  ArrowRightIcon,
  BrainCircuit,
  ZapIcon
} from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden mb-8">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="size-14 rounded-2xl bg-lc-layer-1 border border-lc-border flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
              <BrainCircuit className="size-8 text-brand-orange" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-lc-text-primary tracking-tight">
                Welcome back, {user?.firstName || "there"}!
              </h1>
              <p className="text-sm text-lc-text-secondary mt-1 font-medium">
                Pick up where you left off or start a new collaborative session.
              </p>
            </div>
          </div>
          <button
            onClick={onCreateSession}
            className="flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl transition-all active:scale-95 shadow-xl shadow-brand-orange/20"
          >
            <ZapIcon className="size-5 fill-current" />
            <span>New Session</span>
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>


  );
}

export default WelcomeSection;
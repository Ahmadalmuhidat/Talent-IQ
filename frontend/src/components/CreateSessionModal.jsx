import {
  Code2Icon,
  LoaderIcon,
  PlusIcon
} from "lucide-react";
import { PROBLEMS } from "../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-lc-layer-1 border border-lc-border rounded-xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-lc-border flex items-center justify-between">
          <h3 className="text-xl font-bold text-lc-text-primary">Create New Session</h3>
          <button onClick={onClose} className="text-lc-text-secondary hover:text-lc-text-primary transition-colors font-bold text-xl">×</button>
        </div>

        <div className="p-6 space-y-6">
          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-lc-text-secondary uppercase tracking-wider block">
              Select Problem <span className="text-hard">*</span>
            </label>

            <select
              className="w-full bg-lc-layer-2 text-lc-text-primary border border-lc-border rounded-lg px-4 py-2.5 outline-none focus:border-brand-orange transition-colors cursor-pointer appearance-none"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find((p) => p.title === e.target.value);
                setRoomConfig({
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled className="bg-lc-layer-2">
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title} className="bg-lc-layer-2">
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4 flex gap-3">
              <div className="size-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Code2Icon className="size-5 text-green-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-green-500">Room Summary</p>
                <div className="text-xs text-lc-text-secondary space-y-1">
                  <p>Problem: <span className="text-lc-text-primary font-semibold">{roomConfig.problem}</span></p>
                  <p>Mode: <span className="text-lc-text-primary font-semibold">1-on-1 Collaborative Session</span></p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-lc-layer-2 flex items-center justify-end gap-3 border-t border-lc-border">
          <button
            className="px-4 py-2 text-sm font-bold text-lc-text-secondary hover:text-lc-text-primary transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="flex items-center gap-2 px-6 py-2 bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-bold rounded-lg shadow-lg shadow-brand-orange/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-4 animate-spin" />
            ) : (
              <PlusIcon className="size-4" />
            )}

            {isCreating ? "Creating..." : "Create Room"}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>

  );
}
export default CreateSessionModal;
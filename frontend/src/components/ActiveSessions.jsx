import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  BrainCircuit,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getDifficultyBadgeClass } from "../lib/utils";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 bg-lc-layer-1 border border-lc-border rounded-xl h-full flex flex-col overflow-hidden">
      <div className="p-6">
        {/* HEADERS SECTION */}
        <div className="flex items-center justify-between mb-6">
          {/* TITLE AND ICON */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-orange/10 rounded-lg">
              <ZapIcon className="size-5 text-brand-orange" />
            </div>
            <h2 className="text-xl font-bold text-lc-text-primary">Live Sessions</h2>
          </div>

          <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 rounded text-xs font-bold text-green-500 uppercase tracking-wider border border-green-500/20">
            <div className="size-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>{sessions.length} active</span>
          </div>
        </div>

        {/* SESSIONS LIST */}
        <div className="space-y-3 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoaderIcon className="size-8 animate-spin text-lc-text-secondary" />
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="group bg-lc-layer-2 border border-lc-border rounded-lg hover:border-brand-orange/50 transition-all"
              >
                <div className="flex items-center justify-between gap-4 p-4">
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="relative size-12 rounded-lg bg-lc-layer-1 border border-lc-border flex items-center justify-center">
                      <Code2Icon className="size-6 text-brand-orange" />
                      <div className="absolute -top-1 -right-1 size-3 bg-green-500 rounded-full border border-lc-layer-1" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-lc-text-primary truncate">{session.problem}</h3>
                        <span
                          className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider ${getDifficultyBadgeClass(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-medium text-lc-text-secondary">
                        <div className="flex items-center gap-1.5">
                          <CrownIcon className="size-3.5" />
                          <span>{session.host?.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-lc-layer-1 rounded border border-lc-border">
                          <UsersIcon className="size-3.5" />
                          <span>{session.participant ? "2/2" : "1/2"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {session.participant && !isUserInSession(session) ? (
                      <span className="px-3 py-1 bg-lc-layer-1 text-lc-text-secondary text-xs font-bold rounded cursor-not-allowed">Full</span>
                    ) : (
                      <Link to={`/session/${session._id}`} className="flex items-center gap-2 px-4 py-1.5 bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-bold rounded shadow-lg shadow-brand-orange/20 transition-all active:scale-95">
                        {isUserInSession(session) ? "Rejoin" : "Join"}
                        <ArrowRightIcon className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-lc-layer-2/50 rounded-xl border border-dashed border-lc-border">
              <div className="size-16 mx-auto mb-4 bg-lc-layer-2 rounded-2xl flex items-center justify-center border border-lc-border">
                <BrainCircuit className="size-8 text-lc-text-secondary/40" />
              </div>
              <p className="text-base font-bold text-lc-text-primary mb-1">No active sessions</p>
              <p className="text-xs text-lc-text-secondary uppercase tracking-widest font-semibold opacity-60">Be the first to create one!</p>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
export default ActiveSessions;
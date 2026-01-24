import {
  Code2,
  Clock,
  Users,
  Trophy,
  Loader
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";

function RecentSessions({ sessions, isLoading }) {
  return (
    <div className="mt-8 bg-lc-layer-1 border border-lc-border rounded-xl overflow-hidden p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-lc-layer-2 border border-lc-border rounded-lg">
          <Clock className="size-5 text-lc-text-secondary" />
        </div>
        <h2 className="text-xl font-bold text-lc-text-primary">Your Past Sessions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-20">
            <Loader className="size-8 animate-spin text-lc-text-secondary" />
          </div>
        ) : sessions.length > 0 ? (
          sessions.map((session) => (
            <div
              key={session._id}
              className={`group bg-lc-layer-2 border rounded-lg p-5 transition-all hover:bg-lc-layer-2/80 ${session.status === "active"
                  ? "border-green-500/30 ring-1 ring-green-500/20"
                  : "border-lc-border hover:border-brand-orange/30"
                }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="size-10 rounded-lg bg-lc-layer-1 border border-lc-border flex items-center justify-center flex-shrink-0">
                    <Code2 className="size-5 text-brand-orange" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lc-text-primary truncate">{session.problem}</h3>
                    <span
                      className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider ${getDifficultyBadgeClass(
                        session.difficulty
                      )}`}
                    >
                      {session.difficulty}
                    </span>
                  </div>
                </div>
                {session.status === "active" && (
                  <div className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500 text-white uppercase animate-pulse">
                    Live
                  </div>
                )}
              </div>

              <div className="space-y-2.5 text-xs font-medium text-lc-text-secondary mb-5">
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5" />
                  <span>
                    {formatDistanceToNow(new Date(session.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-3.5" />
                  <span>
                    {session.participant ? "2" : "1"} participant
                    {session.participant ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-lc-border/50">
                <span className="text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest opacity-60">
                  {session.status === "active" ? "Ongoing" : "Completed"}
                </span>
                <span className="text-[10px] font-bold text-lc-text-secondary/40 whitespace-nowrap">
                  {new Date(session.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-lc-layer-2/30 rounded-xl border border-dashed border-lc-border">
            <div className="size-16 mx-auto mb-4 bg-lc-layer-2 rounded-2xl flex items-center justify-center border border-lc-border">
              <Trophy className="size-8 text-lc-text-secondary/40" />
            </div>
            <p className="text-base font-bold text-lc-text-primary mb-1">No sessions yet</p>
            <p className="text-xs text-lc-text-secondary uppercase tracking-widest font-semibold opacity-60">Start your journey today!</p>
          </div>
        )}
      </div>
    </div>

  );
}

export default RecentSessions;
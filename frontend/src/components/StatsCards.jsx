import {
  TrophyIcon,
  UsersIcon
} from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="lg:col-span-1 grid grid-cols-1 gap-4">
      {/* Active Count */}
      <div className="bg-lc-layer-1 border border-lc-border rounded-xl p-6 hover:bg-lc-layer-2 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-green-500/10 rounded-lg">
            <UsersIcon className="size-5 text-green-500" />
          </div>
          <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/20">
            Live
          </div>
        </div>
        <div className="text-3xl font-bold text-lc-text-primary mb-1">{activeSessionsCount}</div>
        <div className="text-xs text-lc-text-secondary font-medium uppercase tracking-wider">Active Sessions</div>
      </div>

      {/* Recent Count */}
      <div className="bg-lc-layer-1 border border-lc-border rounded-xl p-6 hover:bg-lc-layer-2 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-brand-orange/10 rounded-lg">
            <TrophyIcon className="size-5 text-brand-orange" />
          </div>
        </div>
        <div className="text-3xl font-bold text-lc-text-primary mb-1">{recentSessionsCount}</div>
        <div className="text-xs text-lc-text-secondary font-medium uppercase tracking-wider">Total Sessions</div>
      </div>
    </div>

  );
}

export default StatsCards;
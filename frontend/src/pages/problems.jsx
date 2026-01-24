import { Link } from "react-router-dom";
import { PROBLEMS } from "../data/problems";
import {
  ChevronRightIcon
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function Problems() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((problem) => problem.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((problem) => problem.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((problem) => problem.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-lc-bg text-lc-text-primary">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-lc-text-primary mb-2">Practice Problems</h1>
          <p className="text-lc-text-secondary text-sm">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-lc-layer-1 border border-lc-border rounded-lg p-4">
            <div className="text-xs text-lc-text-secondary uppercase mb-1">Total</div>
            <div className="text-2xl font-bold">{problems.length}</div>
          </div>
          <div className="bg-lc-layer-1 border border-lc-border rounded-lg p-4">
            <div className="text-xs text-easy uppercase mb-1">Easy</div>
            <div className="text-2xl font-bold text-easy">{easyProblemsCount}</div>
          </div>
          <div className="bg-lc-layer-1 border border-lc-border rounded-lg p-4">
            <div className="text-xs text-medium uppercase mb-1">Medium</div>
            <div className="text-2xl font-bold text-medium">{mediumProblemsCount}</div>
          </div>
          <div className="bg-lc-layer-1 border border-lc-border rounded-lg p-4">
            <div className="text-xs text-hard uppercase mb-1">Hard</div>
            <div className="text-2xl font-bold text-hard">{hardProblemsCount}</div>
          </div>
        </div>

        {/* PROBLEMS TABLE-LIKE LIST */}
        <div className="bg-lc-layer-1 border border-lc-border rounded-xl divide-y divide-lc-border overflow-hidden">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problems/${problem.id}`}
              className="flex items-center px-6 py-4 hover:bg-lc-layer-2 transition-colors group"
            >
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex items-center gap-3">
                  <span className="text-lc-text-primary font-medium group-hover:text-brand-orange transition-colors truncate">
                    {problem.title}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getDifficultyBadgeClass(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
                <div className="mt-1 text-xs text-lc-text-secondary truncate">
                  {problem.category} • {problem.description.text.slice(0, 100)}...
                </div>
              </div>

              <div className="flex items-center gap-2 text-brand-orange scale-90 opacity-0 group-hover:opacity-100 transition-all transform translate-x-1 group-hover:translate-x-0">
                <span className="text-xs font-bold">Solve</span>
                <ChevronRightIcon className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Problems;
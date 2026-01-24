import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  return (
    <div className="h-full overflow-y-auto bg-lc-bg border-r border-lc-border">
      {/* HEADER SECTION */}
      <div className="p-4 border-b border-lc-border">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-xl font-bold text-lc-text-primary">{problem.title}</h1>
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyBadgeClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
        </div>

        {/* Problem selector */}
        <div className="mt-2">
          <select
            className="w-full bg-lc-layer-1 text-lc-text-primary text-sm border border-lc-border rounded px-2 py-1 outline-none focus:border-brand-orange"
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* PROBLEM DESC */}
        <div>
          <h2 className="text-sm font-semibold text-lc-text-primary mb-3 uppercase tracking-wider">Description</h2>
          <div className="space-y-4 text-sm leading-relaxed text-lc-text-secondary">
            <p>{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </div>

        {/* EXAMPLES SECTION */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-lc-text-primary uppercase tracking-wider">Examples</h2>
          {problem.examples.map((example, idx) => (
            <div key={idx} className="space-y-2">
              <p className="font-semibold text-lc-text-primary text-sm">Example {idx + 1}:</p>
              <div className="bg-lc-layer-1 border border-lc-border rounded-lg p-3 font-mono text-xs space-y-1">
                <div className="flex gap-2">
                  <span className="text-lc-text-primary font-bold min-w-[50px]">Input:</span>
                  <span className="text-lc-text-secondary">{example.input}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-lc-text-primary font-bold min-w-[50px]">Output:</span>
                  <span className="text-lc-text-secondary">{example.output}</span>
                </div>
                {example.explanation && (
                  <div className="pt-2 border-t border-lc-border mt-1">
                    <span className="text-lc-text-secondary">
                      <span className="font-semibold italic">Explanation:</span> {example.explanation}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CONSTRAINTS */}
        <div>
          <h2 className="text-sm font-semibold text-lc-text-primary mb-3 uppercase tracking-wider">Constraints</h2>
          <ul className="space-y-2 text-sm text-lc-text-secondary">
            {problem.constraints.map((constraint, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-brand-orange">•</span>
                <code>{constraint}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
}

export default ProblemDescription;
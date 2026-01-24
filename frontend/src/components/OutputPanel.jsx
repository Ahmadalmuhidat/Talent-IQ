function OutputPanel({ output }) {
  return (
    <div className="h-full bg-lc-bg flex flex-col border-t border-lc-border">
      <div className="px-4 h-10 bg-lc-layer-1 border-b border-lc-border flex items-center">
        <span className="text-xs font-semibold text-lc-text-primary uppercase tracking-wider">Result</span>
      </div>
      <div className="flex-1 overflow-auto p-4 font-mono text-xs">
        {output === null ? (
          <div className="h-full flex items-center justify-center text-lc-text-secondary">
            Click "Run" to see the output here...
          </div>
        ) : output.success ? (
          <div className="space-y-4">
            <div className="text-green-500 font-bold text-sm">Accepted</div>
            <div className="bg-lc-layer-1 p-3 rounded border border-lc-border space-y-2">
              <div className="text-lc-text-secondary">Output:</div>
              <pre className="text-lc-text-primary whitespace-pre-wrap">{output.output}</pre>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-red-500 font-bold text-sm">Runtime Error</div>
            <div className="bg-lc-layer-1 p-3 rounded border border-lc-border space-y-2">
              {output.output && (
                <pre className="text-lc-text-secondary whitespace-pre-wrap mb-2">
                  {output.output}
                </pre>
              )}
              <pre className="text-red-400 whitespace-pre-wrap">{output.error}</pre>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
export default OutputPanel;
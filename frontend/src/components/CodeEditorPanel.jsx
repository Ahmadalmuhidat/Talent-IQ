import Editor from "@monaco-editor/react";
import {
  Loader2Icon,
  PlayIcon
} from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full bg-lc-bg flex flex-col">
      <div className="flex items-center justify-between px-4 h-10 bg-lc-layer-1 border-b border-lc-border">
        <div className="flex items-center gap-2">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-4"
          />
          <select
            className="bg-transparent text-lc-text-primary text-xs font-medium outline-none cursor-pointer hover:bg-lc-layer-2 px-2 py-1 rounded transition-colors"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key} className="bg-lc-layer-1 text-lc-text-primary">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-bold transition-all
            ${isRunning
              ? "bg-lc-layer-2 text-lc-text-secondary cursor-not-allowed"
              : "bg-lc-layer-2 text-green-500 hover:bg-lc-layer-2/80 active:scale-95 border border-transparent hover:border-green-500/30"
            }`}
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-3 animate-spin" />
              Running
            </>
          ) : (
            <>
              <PlayIcon className="size-3 fill-current" />
              Run
            </>
          )}
        </button>
      </div>

      <div className="flex-1">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 10 },
            minimap: { enabled: false },
            backgroundColor: "#1a1a1a",
          }}
        />
      </div>
    </div>

  );
}
export default CodeEditorPanel;
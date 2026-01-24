import { useUser } from "@clerk/clerk-react";
import {
  useEffect,
  useState
} from "react";
import {
  useNavigate,
  useParams
} from "react-router";
import {
  useEndSession,
  useJoinSession,
  useSessionById
} from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../services/piston";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle
} from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import {
  Loader2Icon,
  LogOutIcon,
  PhoneOffIcon,
  UsersIcon
} from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";
import useStreamClient from "../hooks/useStreamClient";
import {
  StreamCall,
  StreamVideo
} from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";

function Session() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participants?.some((p) => p.clerkId === user?.id);

  const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
    session,
    loadingSession,
    isHost,
    isParticipant
  );

  // find the problem data based on session problem title
  const problemData = session?.problem
    ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
    : null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(problemData?.starterCode?.[selectedLanguage] || "");

  // auto-join session if user is not already a participant and not the host
  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (isHost || isParticipant) return;

    joinSessionMutation.mutate(id, { onSuccess: refetch });

    // remove the joinSessionMutation, refetch from dependencies to avoid infinite loop
  }, [session, user, loadingSession, isHost, isParticipant, id]);

  // redirect the "participant" when session ends
  useEffect(() => {
    if (!session || loadingSession) return;

    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  // update code when problem loads or changes
  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData.starterCode[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    // use problem-specific starter code
    const starterCode = problemData?.starterCode?.[newLang] || "";
    setCode(starterCode);
    setOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure you want to end this session? All participants will be notified.")) {
      // this will navigate the HOST to dashboard
      endSessionMutation.mutate(id, { onSuccess: () => navigate("/dashboard") });
    }
  };

  return (
    <div className="h-screen bg-lc-bg text-lc-text-primary flex flex-col">
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal">
          {/* LEFT PANEL - CODE EDITOR & PROBLEM DETAILS */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
              {/* PROBLEM DSC PANEL */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full overflow-y-auto bg-lc-bg">
                  {/* HEADER SECTION */}
                  <div className="p-6 bg-lc-layer-1 border-b border-lc-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0 pr-4">
                        <h1 className="text-2xl font-bold text-lc-text-primary truncate">
                          {session?.problem || "Loading..."}
                        </h1>
                        <div className="flex items-center gap-4 mt-2">
                          {problemData?.category && (
                            <span className="text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest">{problemData.category}</span>
                          )}
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest">
                            <UsersIcon className="size-3" />
                            <span>{session?.participants?.length >= 1 ? 2 : 1}/2 Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${getDifficultyBadgeClass(
                            session?.difficulty
                          )}`}
                        >
                          {session?.difficulty || "Easy"}
                        </span>
                        {isHost && session?.status === "active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="flex items-center gap-2 px-3 py-1.5 bg-hard/10 hover:bg-hard/20 text-hard text-xs font-bold rounded border border-hard/20 transition-all active:scale-95"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="size-3.5 animate-spin" />
                            ) : (
                              <LogOutIcon className="size-3.5" />
                            )}
                            End
                          </button>
                        )}
                        {session?.status === "completed" && (
                          <span className="px-2 py-1 bg-lc-layer-2 text-lc-text-secondary text-[10px] font-bold uppercase rounded border border-lc-border">Completed</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-8">
                    {/* problem desc */}
                    {problemData?.description && (
                      <div className="bg-lc-layer-1 rounded-xl p-6 border border-lc-border shadow-sm">
                        <h2 className="text-sm font-bold mb-4 text-lc-text-primary uppercase tracking-widest opacity-60">Description</h2>
                        <div className="space-y-4 text-sm leading-loose font-medium text-lc-text-primary/90">
                          <p>{problemData.description.text}</p>
                          {problemData.description.notes?.map((note, idx) => (
                            <p key={idx} className="bg-lc-layer-2/50 border-l-2 border-brand-orange pl-4 italic">
                              {note}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* examples section */}
                    {problemData?.examples && problemData.examples.length > 0 && (
                      <div className="space-y-4">
                        <h2 className="text-sm font-bold text-lc-text-primary uppercase tracking-widest opacity-60 ml-1">Examples</h2>

                        <div className="space-y-4">
                          {problemData.examples.map((example, idx) => (
                            <div key={idx} className="bg-lc-layer-1 border border-lc-border rounded-xl overflow-hidden shadow-sm">
                              <div className="px-4 py-2 bg-lc-layer-2 border-b border-lc-border flex items-center gap-2">
                                <span className="size-5 rounded-full bg-lc-bg border border-lc-border flex items-center justify-center text-[10px] font-black">{idx + 1}</span>
                                <p className="text-[10px] font-black uppercase tracking-tighter opacity-80">Example Case</p>
                              </div>
                              <div className="p-4 font-mono text-xs space-y-2">
                                <div className="flex gap-4">
                                  <span className="text-brand-orange font-bold w-16 opacity-70">Input</span>
                                  <span className="text-lc-text-primary font-medium">{example.input}</span>
                                </div>
                                <div className="flex gap-4">
                                  <span className="text-green-500 font-bold w-16 opacity-70">Output</span>
                                  <span className="text-lc-text-primary font-medium">{example.output}</span>
                                </div>
                                {example.explanation && (
                                  <div className="pt-2 border-t border-lc-border mt-2 text-[11px] font-sans text-lc-text-secondary italic">
                                    <span className="font-bold uppercase text-[9px] not-italic mr-2">Explanation</span>
                                    {example.explanation}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Constraints */}
                    {problemData?.constraints && problemData.constraints.length > 0 && (
                      <div className="bg-lc-layer-1 rounded-xl p-6 border border-lc-border shadow-sm">
                        <h2 className="text-sm font-bold mb-4 text-lc-text-primary uppercase tracking-widest opacity-60">Constraints</h2>
                        <ul className="space-y-3">
                          {problemData.constraints.map((constraint, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <span className="text-brand-orange font-bold mt-0.5">•</span>
                              <code className="bg-lc-layer-2 px-1.5 py-0.5 rounded text-[11px] font-mono text-lc-text-primary">{constraint}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle className="h-1 bg-lc-border hover:bg-brand-orange/30 transition-colors cursor-row-resize" />

              <Panel defaultSize={50} minSize={20}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={70} minSize={30}>
                    <CodeEditorPanel
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={(value) => setCode(value)}
                      onRunCode={handleRunCode}
                    />
                  </Panel>

                  <PanelResizeHandle className="h-1 bg-lc-border hover:bg-brand-orange/30 transition-colors cursor-row-resize" />

                  <Panel defaultSize={30} minSize={15}>
                    <OutputPanel output={output} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="w-1 bg-lc-border hover:bg-brand-orange/30 transition-colors cursor-col-resize" />

          {/* RIGHT PANEL - VIDEO CALLS & CHAT */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full bg-lc-bg p-4 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="size-10 mx-auto animate-spin text-brand-orange mb-4" />
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Connecting Call...</p>
                  </div>
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <div className="bg-lc-layer-1 border border-lc-border rounded-[2rem] p-10 text-center max-w-sm shadow-2xl">
                    <div className="size-20 bg-hard/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-hard/20">
                      <PhoneOffIcon className="size-10 text-hard" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Connection Failed</h2>
                    <p className="text-xs text-lc-text-secondary font-medium leading-relaxed">Unable to establish a secure video link. Please check your network and try again.</p>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>

  );
}

export default Session;
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  Loader2Icon,
  MessageSquareIcon,
  UsersIcon,
  XIcon
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg">Joining call...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex gap-3 relative str-video">
      <div className="flex-1 flex flex-col gap-3">
        {/* Participants count badge and Chat Toggle */}
        <div className="flex items-center justify-between gap-2 bg-lc-layer-1 p-3 rounded-xl border border-lc-border shadow-sm">
          <div className="flex items-center gap-2.5 px-3 py-1 bg-lc-layer-2 border border-lc-border rounded-lg">
            <UsersIcon className="size-4 text-brand-orange" />
            <span className="text-xs font-bold text-lc-text-primary uppercase tracking-widest">
              {participantCount} {participantCount === 1 ? "Active" : "Active"}
            </span>
          </div>
          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all
                ${isChatOpen
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                  : "bg-lc-layer-2 text-lc-text-secondary border border-lc-border hover:bg-lc-layer-2/80"
                }`}
              title={isChatOpen ? "Hide chat" : "Show chat"}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        <div className="flex-1 bg-lc-layer-1 border border-lc-border rounded-2xl overflow-hidden relative shadow-inner">
          <SpeakerLayout />
        </div>

        <div className="bg-lc-layer-1 p-3 rounded-xl border border-lc-border shadow-sm flex justify-center">
          <CallControls onLeave={() => navigate("/dashboard")} />
        </div>
      </div>

      {/* CHAT SECTION */}
      {chatClient && channel && (
        <div
          className={`flex flex-col rounded-2xl border border-lc-border shadow-2xl overflow-hidden bg-lc-layer-1 transition-all duration-300 ease-in-out ${isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0 pointer-events-none"
            }`}
        >
          {isChatOpen && (
            <>
              <div className="bg-lc-layer-2 p-4 border-b border-lc-border flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-black text-lc-text-primary uppercase tracking-[0.2em]">Session Chat</h3>
                  <div className="text-[10px] text-brand-orange font-bold uppercase mt-1">Live Updates</div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="size-8 rounded-lg bg-lc-layer-1 border border-lc-border flex items-center justify-center text-lc-text-secondary hover:text-lc-text-primary transition-colors"
                  title="Close chat"
                >
                  <XIcon className="size-4" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden stream-chat-dark custom-scrollbar">

                <Chat client={chatClient} theme="str-chat__theme-dark">
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>

  );
}
export default VideoCallUI;
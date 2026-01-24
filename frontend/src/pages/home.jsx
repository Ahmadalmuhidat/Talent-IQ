import { Link } from "react-router-dom";
import {
  CheckIcon,
  Code2Icon,
  BrainCircuit,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  PlusIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function Home() {
  return (
    <div className="min-h-screen bg-lc-bg text-lc-text-primary">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">
              <ZapIcon className="size-3 text-brand-orange fill-current" />
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Real-time Collaboration</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter">
              <span className="text-lc-text-primary underline decoration-brand-orange/30 decoration-8 underline-offset-8">
                Code
              </span>
              <br />
              <span className="text-brand-orange">Together.</span>
            </h1>

            <p className="text-lg text-lc-text-secondary leading-relaxed max-w-lg font-medium">
              The professional environment for collaborative coding interviews and peer programming.
              Face-to-face, real-time, and built for technical excellence.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-lc-layer-1 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-wider flex items-center gap-2">
                <CheckIcon className="size-3 text-green-500" />
                Live Video
              </div>
              <div className="px-3 py-1 bg-lc-layer-1 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-wider flex items-center gap-2">
                <CheckIcon className="size-3 text-green-500" />
                HD Editor
              </div>
              <div className="px-3 py-1 bg-lc-layer-1 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-wider flex items-center gap-2">
                <CheckIcon className="size-3 text-green-500" />
                Multi-Language
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <SignInButton mode="modal">
                <button className="px-8 py-4 bg-lc-text-primary text-lc-bg font-black rounded-xl hover:bg-white transition-all active:scale-95 shadow-2xl">
                  Get Started Free
                </button>
              </SignInButton>

              <button className="px-8 py-4 bg-lc-layer-1 text-lc-text-primary font-black rounded-xl border border-lc-border hover:bg-lc-layer-2 transition-all active:scale-95">
                <Link to="/about" className="hover:text-brand-orange transition-colors">Learn More</Link>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE/ANIMATION CAPTURE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-[2.5rem] blur-2xl group-hover:bg-brand-orange/30 transition-all duration-500 opacity-50" />
            <div className="relative bg-lc-layer-1 border border-lc-border rounded-3xl p-4 shadow-2xl overflow-hidden transform lg:rotate-2 group-hover:rotate-0 transition-all duration-500">
              <img
                src="/hero.png"
                alt="TalentIQ Platform"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-32 border-t border-lc-border/50">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black mb-4">
            Everything You Need to <span className="text-brand-orange italic">Succeed</span>
          </h2>
          <p className="text-sm text-lc-text-secondary max-w-xl mx-auto font-medium uppercase tracking-widest leading-loose">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-lc-layer-1 border border-lc-border rounded-2xl p-8 hover:bg-lc-layer-2 transition-colors group">
            <div className="size-14 bg-lc-layer-2 border border-lc-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <VideoIcon className="size-7 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3">HD Video Call</h3>
            <p className="text-sm text-lc-text-secondary leading-relaxed font-medium">
              Crystal clear video and audio for seamless communication during intense interviews.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-lc-layer-1 border border-lc-border rounded-2xl p-8 hover:bg-lc-layer-2 transition-colors group">
            <div className="size-14 bg-lc-layer-2 border border-lc-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2Icon className="size-7 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3">Live Code Editor</h3>
            <p className="text-sm text-lc-text-secondary leading-relaxed font-medium">
              Collaborate in real-time with syntax highlighting and professional multi-language support.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-lc-layer-1 border border-lc-border rounded-2xl p-8 hover:bg-lc-layer-2 transition-colors group">
            <div className="size-14 bg-lc-layer-2 border border-lc-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UsersIcon className="size-7 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3">Easy Collaboration</h3>
            <p className="text-sm text-lc-text-secondary leading-relaxed font-medium">
              Share your screen, discuss solutions, and learn from each other in a focused environment.
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-32 border-t border-lc-border/50">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">
            How It <span className="text-brand-orange">Works</span>
          </h2>
          <p className="text-sm text-lc-text-secondary max-w-xl mx-auto font-medium uppercase tracking-widest leading-loose">
            Simple 3-step process to start your collaborative coding journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-lc-border to-transparent -z-10" />

          {/* Step 1 */}
          <div className="text-center space-y-6">
            <div className="size-16 bg-lc-layer-2 border-2 border-lc-border rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:rotate-6 transition-transform">
              <PlusIcon className="size-8 text-brand-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">1. Create a Room</h3>
              <p className="text-xs text-lc-text-secondary font-medium leading-relaxed">Select a problem from our curated list and initialize a private session.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center space-y-6">
            <div className="size-16 bg-lc-layer-2 border-2 border-lc-border rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:-rotate-6 transition-transform">
              <UsersIcon className="size-8 text-brand-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">2. Share and Invite</h3>
              <p className="text-xs text-lc-text-secondary font-medium leading-relaxed">Send the unique session link to your peer or interviewer to join instantly.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center space-y-6">
            <div className="size-16 bg-lc-layer-2 border-2 border-lc-border rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:rotate-6 transition-transform">
              <ZapIcon className="size-8 text-brand-orange fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">3. Collaborative Solving</h3>
              <p className="text-xs text-lc-text-secondary font-medium leading-relaxed">Code together in real-time, communicate via HD video, and run test cases.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LANGUAGES SECTION */}
      <div className="bg-lc-layer-1 py-32 border-y border-lc-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-black tracking-tighter">Your Platform, Your <span className="text-brand-orange">Language.</span></h2>
              <p className="text-lg text-lc-text-secondary font-medium leading-relaxed">
                TalentIQ supports major programming languages used in top-tier technical interviews. Switch languages seamlessly mid-session.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {['JavaScript', 'Python', 'Java', 'C++'].map(lang => (
                  <span key={lang} className="px-4 py-2 bg-lc-layer-2 border border-lc-border rounded-lg text-xs font-bold uppercase tracking-widest">{lang}</span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="p-8 bg-lc-bg border border-lc-border rounded-3xl flex flex-col items-center justify-center space-y-4 hover:border-brand-orange/40 transition-colors">
                <Code2Icon className="size-10 text-brand-orange" />
                <span className="font-black text-xs uppercase tracking-widest">Syntax Perfect</span>
              </div>
              <div className="p-8 bg-lc-bg border border-lc-border rounded-3xl flex flex-col items-center justify-center space-y-4 hover:border-brand-orange/40 transition-colors">
                <ZapIcon className="size-10 text-brand-orange fill-current" />
                <span className="font-black text-xs uppercase tracking-widest">Fast Execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-40">
        <div className="relative bg-gradient-to-br from-lc-layer-1 to-lc-bg border border-lc-border rounded-[3rem] p-16 overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange shadow-[0_0_20px_rgba(255,161,22,0.5)]" />
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-5xl font-black tracking-tighter">Ready to showcase your <span className="text-brand-orange">Talent?</span></h2>
            <p className="text-lg text-lc-text-secondary font-medium italic">"The best way to predict your success is to practice in the right environment."</p>
            <div className="pt-6">
              <SignInButton mode="modal">
                <button className="px-12 py-5 bg-brand-orange text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-brand-orange/20 uppercase tracking-widest">
                  Start Your First Session
                </button>
              </SignInButton>
            </div>
          </div>
          {/* Abstract background blobs */}
          <div className="absolute -top-24 -right-24 size-96 bg-brand-orange/5 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 size-96 bg-brand-orange/5 blur-[100px] rounded-full" />
        </div>
      </div>

      {/* ENHANCED FOOTER */}
      <footer className="bg-lc-layer-1 border-t border-lc-border pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded bg-lc-layer-2 flex items-center justify-center border border-lc-border">
                  <BrainCircuit className="size-5 text-brand-orange" />
                </div>
                <span className="font-bold text-xl tracking-tight">TalentIQ</span>
              </div>
              <p className="text-sm text-lc-text-secondary max-w-xs leading-relaxed font-medium">
                The ultimate platform for collaborative coding interviews and peer programming. Built for technical excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-lc-text-primary">Connect</h4>
              <ul className="space-y-2 text-sm text-lc-text-secondary font-medium">
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">GitHub</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Discord</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-lc-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-[10px] font-bold text-lc-text-secondary/50 uppercase tracking-[0.2em]">
              © 2026 TalentIQ. Built with passion by Ahmad Almuhidat.
            </p>
            <div className="flex gap-8 text-[10px] font-bold text-lc-text-secondary/50 uppercase tracking-[0.2em]">
              <span className="cursor-pointer hover:text-lc-text-secondary">Privacy</span>
              <span className="cursor-pointer hover:text-lc-text-secondary">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
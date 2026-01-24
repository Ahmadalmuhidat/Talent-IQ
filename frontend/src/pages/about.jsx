import {
  UsersIcon,
  Code2Icon,
  VideoIcon,
  BrainCircuit,
  ZapIcon,
  ShieldCheckIcon,
  GlobeIcon
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <UsersIcon className="w-6 h-6 text-primary" />,
      title: "Real-time Collaboration",
      description: "Code together with your peers in real-time. Experience seamless synchronization and instant feedback."
    },
    {
      icon: <VideoIcon className="w-6 h-6 text-primary" />,
      title: "Integrated Video Calls",
      description: "High-quality video and audio communication powered by Stream, making remote interviews feel personal."
    },
    {
      icon: <Code2Icon className="w-6 h-6 text-primary" />,
      title: "Multi-language Support",
      description: "Execute code in JavaScript, Python, and Java with our integrated Piston-powered engine."
    },
    {
      icon: <ZapIcon className="w-6 h-6 text-warning" />,
      title: "Instant Setup",
      description: "No complex configuration needed. Start a session with a single click and invite others immediately."
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-success" />,
      title: "Secure & Private",
      description: "Your data and sessions are protected with industry-standard security protocols and Clerk authentication."
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-info" />,
      title: "Accessible Anywhere",
      description: "A fully responsive design ensures you can practice and interview from any device, anywhere."
    }
  ];

  const techStack = [
    { name: "React", category: "Frontend", color: "text-blue-400" },
    { name: "Node.js", category: "Backend", color: "text-yellow-500" },
    { name: "Tailwind CSS", category: "Styling", color: "text-cyan-400" },
    { name: "Clerk", category: "Auth", color: "text-purple-500" },
    { name: "Stream", category: "Video/Chat", color: "text-blue-600" },
    { name: "Inngest", category: "Workflows", color: "text-orange-500" },
    { name: "Piston", category: "Code Execution", color: "text-red-500" },
    { name: "MongoDB", category: "Database/Real-time", color: "text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-lc-bg text-lc-text-primary flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden border-b border-lc-border">
          <div className="absolute inset-0 bg-brand-orange/5 -z-10" />
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block p-2 rounded-full bg-brand-orange/10 text-brand-orange font-black text-[10px] mb-6 uppercase tracking-widest border border-brand-orange/20">
              Behind the Scenes
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Elevating Technical <span className="text-brand-orange italic">Assessment.</span>
            </h1>
            <p className="text-lg text-lc-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
              Talent IQ is a state-of-the-art collaborative platform designed to bridge the gap between technical assessment and human connection.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-black mb-12 text-center uppercase tracking-tighter">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-lc-layer-1 border border-lc-border rounded-2xl p-8 hover:bg-lc-layer-2 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-lc-layer-2 border border-lc-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon.props.className.includes("text-primary")
                      ? <feature.icon.type {...feature.icon.props} className="w-6 h-6 text-brand-orange" />
                      : feature.icon
                    }
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-lc-text-secondary leading-relaxed font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-lc-layer-1 border-y border-lc-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-2 px-4 rounded-full bg-lc-layer-2 text-lc-text-secondary font-bold text-[10px] mb-8 uppercase tracking-widest border border-lc-border">
              Our Vision
            </div>
            <h2 className="text-4xl font-black mb-10 tracking-tighter">Empowering Connections.</h2>
            <p className="text-lg text-lc-text-secondary leading-relaxed mb-12 font-medium">
              We believe that the best technical interviews are conversations, not interrogations. Our platform is built to facilitate these conversations by removing technical barriers and providing a playground where both candidates and interviewers can thrive.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-lc-layer-2 border border-lc-border rounded-2xl p-6 min-w-[200px]">
                <div className="text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest mb-1">Success Rate</div>
                <div className="text-3xl font-black text-brand-orange">99.9%</div>
              </div>
              <div className="bg-lc-layer-2 border border-lc-border rounded-2xl p-6 min-w-[200px]">
                <div className="text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest mb-1">Monthly Users</div>
                <div className="text-3xl font-black text-brand-orange">50k+</div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-lc-layer-1 border border-lc-border rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              <div className="lg:w-1/3 bg-lc-layer-2 p-12 flex items-center justify-center border-r border-lc-border">
                <div className="size-48 rounded-full overflow-hidden border-4 border-brand-orange/20 shadow-2xl transition-transform hover:scale-110 duration-500">
                  <img
                    src="/ahmad_almuhidat.jpg"
                    alt="Ahmad Almuhidat"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="p-12 lg:w-2/3 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-black mb-2 tracking-tighter">Ahmad Almuhidat</h2>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest">Founder & Lead Architect</p>
                </div>
                <p className="text-lg text-lc-text-secondary leading-relaxed mb-10 italic font-medium">
                  "I built Talent IQ with a simple goal: to create the interview experience I always wished I had. My mission is to transform technical screenings into collaborative, productive sessions that truly showcase a candidate's potential."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-lc-layer-2 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest">Full-Stack Architecture</span>
                  <span className="px-3 py-1 bg-lc-layer-2 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest">Real-time Engineering</span>
                  <span className="px-3 py-1 bg-lc-layer-2 border border-lc-border rounded text-[10px] font-bold text-lc-text-secondary uppercase tracking-widest">Product Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-lc-layer-1 border-t border-lc-border">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-black mb-16 text-center uppercase tracking-tighter">Powered By</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="px-5 py-3 rounded-xl bg-lc-layer-2 border border-lc-border flex flex-col items-center min-w-[150px] hover:border-brand-orange/40 transition-colors shadow-sm">
                  <span className={`text-sm font-black ${tech.color.includes('text-primary') ? 'text-brand-orange' : tech.color}`}>{tech.name}</span>
                  <span className="text-[10px] text-lc-text-secondary/50 font-bold uppercase tracking-widest mt-1">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-lc-bg text-lc-text-secondary border-t border-lc-border text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6 grayscale opacity-60">
            <div className="size-6 rounded bg-lc-layer-1 flex items-center justify-center border border-lc-border">
              <BrainCircuit className="size-4" />
            </div>
            <span className="font-bold text-sm tracking-tight">TalentIQ</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Built for developers, by Ahmad Almuhidat.
          </p>
          <p className="text-[10px] font-bold opacity-30">© 2026 - NO RIGHTS RESERVED. CODE AWAY.</p>
        </div>
      </footer>
    </div>

  );
};

export default About;

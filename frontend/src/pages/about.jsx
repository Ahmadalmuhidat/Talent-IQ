import Navbar from "../components/Navbar";
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
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 -z-10" />
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary  bg-clip-text text-transparent">
              Elevating the Interview Experience
            </h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Talent IQ is a state-of-the-art collaborative platform designed to bridge the gap between technical assessment and human connection.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-base-200/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary transition-all duration-300 group">
                  <div className="card-body">
                    <div className="w-12 h-12 rounded-lg bg-base-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                    <p className="text-base-content/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold mb-8">Empowering Developers to Connect</h2>
            <p className="text-lg text-base-content/80 leading-relaxed mb-8">
              We believe that the best technical interviews are conversations, not interrogations. Our platform is built to facilitate these conversations by removing technical barriers and providing a playground where both candidates and interviewers can thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="stats shadow bg-base-100 border border-base-300">
                <div className="stat">
                  <div className="stat-title text-base-content/60">Success Rate</div>
                  <div className="stat-value text-primary">99.9%</div>
                  <div className="stat-desc">Uptime guaranteed</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-base-content/60">Community</div>
                  <div className="stat-value text-primary">50k+</div>
                  <div className="stat-desc">Users joined last month</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="py-20 bg-gradient-to-t from-base-200 to-base-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden border border-base-300">
              <figure className="lg:w-1/3 bg-gradient-to-br from-primary p-12 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/20 shadow-2xl transition-transform hover:scale-105 duration-300">
                  <img
                    src="/ahmad_almuhidat.jpg"
                    alt="Ahmad Almuhidat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body lg:w-2/3">
                <h2 className="card-title text-3xl font-bold mb-4">Behind the Platform</h2>
                <p className="text-xl text-primary font-semibold mb-4">Ahmad Almuhidat — Senior Software Developer</p>
                <p className="text-base-content/70 leading-relaxed mb-6">
                  "I built Talent IQ with a simple goal: to create the interview experience I always wished I had. As a developer, I know that technical screenings can be stressful. My mission is to transform that stress into a collaborative, productive session that truly showcases a candidate's potential through modern, real-time tools."
                </p>
                <div className="flex gap-4">
                  <div className="badge badge-outline p-4">Full Stack Architecture</div>
                  <div className="badge badge-outline p-4">Real-time Engineering</div>
                  <div className="badge badge-outline p-4">Product Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-base-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Powered By Modern Technology</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="px-6 py-4 rounded-2xl bg-base-100 shadow-lg border border-base-300 flex flex-col items-center min-w-[140px] hover:scale-105 transition-transform cursor-default">
                  <span className={`text-lg font-bold ${tech.color}`}>{tech.name}</span>
                  <span className="text-xs text-base-content/50 uppercase tracking-tighter mt-1">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-center p-10 bg-base-100 text-base-content border-t border-base-300">
        <aside>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-lg bg-gradient-to-r from-primary flex items-center justify-center">
              <BrainCircuit className="size-5 text-white" />
            </div>
            <span className="font-bold text-xl">Talent IQ</span>
          </div>
          <p className="font-bold">
            Built for developers, by Ahmad Almuhidat.
          </p>
          <p>Copyright © 2026 - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default About;

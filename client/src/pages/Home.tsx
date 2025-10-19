import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import VideoBackground from "@/components/VideoBackground";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', company: '', budget: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Video Background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 
                className="text-2xl font-bold tracking-wider"
                style={{ 
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
                }}
              >
                DANVERSE
              </h1>
              <div className="flex gap-4 md:gap-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <a href="#about" className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 font-medium text-sm md:text-base">About</a>
                <a href="#services" className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 font-medium text-sm md:text-base">Services</a>
                <a href="#projects" className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 font-medium text-sm md:text-base">Projects</a>
                <a href="#contact" className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 font-medium text-sm md:text-base">Contact</a>
              </div>
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-300 transition-all duration-300 hidden sm:flex"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-5xl">
            <h2 
              className="text-7xl md:text-9xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{ 
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 40%, #ec4899 70%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.05em',
                textShadow: '0 0 80px rgba(0, 245, 255, 0.5)',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))'
              }}
            >
              DANVERSE
            </h2>
            <p 
              className="text-3xl md:text-4xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#e0f2fe',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              Muhammed Adel
            </p>
            <p 
              className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                background: 'linear-gradient(90deg, #22d3ee 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 500
              }}
            >
              Creative Director & AI Strategist
            </p>
            <p 
              className="text-lg md:text-xl text-cyan-100/70 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I design cinematic ads, interactive 3D web, and AI-powered content systems using fast, production-focused workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg px-10 py-7 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/5 border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 text-lg px-10 py-7 backdrop-blur-sm transition-all duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="container max-w-6xl">
            <h3 
              className="text-5xl md:text-6xl font-bold text-white mb-12 text-center"
              style={{ 
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              About Me
            </h3>
            <div className="bg-gradient-to-br from-black/60 to-cyan-950/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 md:p-14 shadow-2xl shadow-cyan-500/10">
              <p 
                className="text-xl md:text-2xl text-cyan-50/90 leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Based in <span className="text-cyan-400 font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Alexandria, Egypt</span>, I'm a Creative Director and AI Strategist specializing in cutting-edge digital experiences.
              </p>
              <p 
                className="text-xl md:text-2xl text-cyan-50/90 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                My work combines cinematic storytelling, interactive 3D web design, and AI-powered automation to deliver production-ready solutions that push creative boundaries while maintaining efficiency and impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="container max-w-7xl">
            <h3 
              className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
              style={{ 
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "UI/UX Design",
                  description: "Crafting intuitive and visually stunning interfaces that provide exceptional user experiences.",
                  icon: "🎨",
                  gradient: "from-pink-500/20 to-purple-500/20",
                  border: "border-pink-500/30"
                },
                {
                  title: "3D Interactive Web",
                  description: "Building immersive web experiences using React Three Fiber and Drei for next-level engagement.",
                  icon: "🌐",
                  gradient: "from-cyan-500/20 to-blue-500/20",
                  border: "border-cyan-500/30"
                },
                {
                  title: "Motion Graphics & Cinematic Ads",
                  description: "Creating compelling visual narratives with professional-grade motion design and cinematic storytelling.",
                  icon: "🎬",
                  gradient: "from-purple-500/20 to-indigo-500/20",
                  border: "border-purple-500/30"
                },
                {
                  title: "Brand Identity & Creative Direction",
                  description: "Developing cohesive brand systems and leading creative vision from concept to execution.",
                  icon: "✨",
                  gradient: "from-amber-500/20 to-orange-500/20",
                  border: "border-amber-500/30"
                },
                {
                  title: "Copywriting & Prompt Engineering",
                  description: "Crafting persuasive copy and optimizing AI prompts for maximum creative output.",
                  icon: "✍️",
                  gradient: "from-emerald-500/20 to-teal-500/20",
                  border: "border-emerald-500/30"
                },
                {
                  title: "Digital Strategy & Go-to-Market",
                  description: "Planning and executing comprehensive digital strategies that drive business results.",
                  icon: "🚀",
                  gradient: "from-red-500/20 to-pink-500/20",
                  border: "border-red-500/30"
                },
                {
                  title: "AI Video Generation",
                  description: "Leveraging Sora, Veo, Runway, and Leonardo for cutting-edge AI-powered video content.",
                  icon: "🤖",
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  border: "border-blue-500/30"
                },
                {
                  title: "No-Code Automation",
                  description: "Building efficient workflows with Tally, Make.com, Airtable, and Google Workspace.",
                  icon: "⚡",
                  gradient: "from-yellow-500/20 to-amber-500/20",
                  border: "border-yellow-500/30"
                },
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-to-br ${service.gradient} backdrop-blur-xl border-2 ${service.border} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                >
                  <CardHeader>
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <CardTitle 
                      className="text-white text-2xl mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription 
                      className="text-cyan-100/80 text-base leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="container max-w-7xl">
            <h3 
              className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
              style={{ 
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Featured Projects
            </h3>
            <div className="space-y-12">
              {[
                {
                  title: "Bugatti × Jacob & Co. — Macro Product Concept",
                  duration: "12s, 16:9",
                  concept: "Tourbillon mechanics mirrored with W16 energy. No VO, only SFX/score.",
                  media: "4K video, style boards, co-branded end frame.",
                  stack: "Runway/Veo, Foley/SFX, cinematic grading.",
                  role: "Creative Direction, Edit, Sound Design supervision.",
                },
                {
                  title: "DANVERSE Agent — The Creative Brain",
                  duration: "V2, in progress",
                  concept: "AI creative assistant with client memory, decision logic, and cinematic content layer.",
                  media: "Prototype UI, end-to-end automations.",
                  stack: "Next.js 14, Tailwind, Make.com, Airtable, Gemini API, Google Docs/Gmail.",
                  role: "Architecture, Product, UX.",
                },
                {
                  title: "Cash-Now UGC Auto-System",
                  duration: "9:16 Ad Factory",
                  concept: "One-click pipeline that generates daily UGC ads with TTS, QR CTA, and PAY_LINK handoff.",
                  media: "n8n/Make workflow, templates, sample ads.",
                  stack: "n8n or Make.com, TTS, FFmpeg/render, Airtable, landing + PAY_LINK.",
                  role: "System Design, Automation, Creative Direction.",
                },
                {
                  title: "DANFARM™ Referral Engine",
                  duration: "Local, GUI, one-button",
                  concept: "Local referral farming suite with zero config, GUI launcher, and automated runs.",
                  media: "Executable app, scripts, usage guide.",
                  stack: "Local runtime, Python/Node, simple GUI, logging.",
                  role: "Product Design, Architecture, UX.",
                },
                {
                  title: "DANVERSE Portfolio v2 — Interactive 3D Site",
                  duration: "in progress",
                  concept: "High-performance 3D hero with orbit/scroll interaction and clean UI/UX system.",
                  media: "Deployed site, CMS-ready sections, analytics.",
                  stack: "Next.js 14, R3F/Drei, Framer Motion, Tailwind, next-intl (optional).",
                  role: "Design, Frontend, Motion.",
                },
              ].map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-black/60 to-cyan-950/30 backdrop-blur-xl border-2 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <CardHeader>
                    <CardTitle 
                      className="text-white text-3xl md:text-4xl mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription 
                      className="text-purple-300 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                    >
                      {project.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <p 
                        className="text-cyan-400/80 text-sm font-semibold mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Concept
                      </p>
                      <p 
                        className="text-cyan-50/90 text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {project.concept}
                      </p>
                    </div>
                    <div>
                      <p 
                        className="text-cyan-400/80 text-sm font-semibold mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Deliverables
                      </p>
                      <p 
                        className="text-cyan-50/90 text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {project.media}
                      </p>
                    </div>
                    <div>
                      <p 
                        className="text-cyan-400/80 text-sm font-semibold mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Stack
                      </p>
                      <p 
                        className="text-cyan-300 text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {project.stack}
                      </p>
                    </div>
                    <div>
                      <p 
                        className="text-cyan-400/80 text-sm font-semibold mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Role
                      </p>
                      <p 
                        className="text-purple-300 text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {project.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-gradient-to-b from-transparent to-black/60">
          <div className="container max-w-4xl">
            <h3 
              className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
              style={{ 
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get in Touch
            </h3>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle 
                    className="text-white text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:mohamed.adel1160@icloud.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    mohamed.adel1160@icloud.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle 
                    className="text-white text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    Instagram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://www.instagram.com/muhammedd_adel/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    @muhammedd_adel
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-black/60 to-cyan-950/30 backdrop-blur-xl border-2 border-cyan-500/20">
              <CardHeader>
                <CardTitle 
                  className="text-white text-3xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Send a Message
                </CardTitle>
                <CardDescription 
                  className="text-cyan-100/70 text-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label 
                        htmlFor="name" 
                        className="text-cyan-300 text-base"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-2 border-cyan-500/30 text-white placeholder:text-white/40 focus:border-cyan-400 transition-colors"
                        placeholder="Your name"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label 
                        htmlFor="email" 
                        className="text-cyan-300 text-base"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-2 border-cyan-500/30 text-white placeholder:text-white/40 focus:border-cyan-400 transition-colors"
                        placeholder="your@email.com"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label 
                        htmlFor="company" 
                        className="text-cyan-300 text-base"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 border-2 border-cyan-500/30 text-white placeholder:text-white/40 focus:border-cyan-400 transition-colors"
                        placeholder="Your company"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label 
                        htmlFor="budget" 
                        className="text-cyan-300 text-base"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                      >
                        Budget
                      </Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="bg-white/5 border-2 border-cyan-500/30 text-white placeholder:text-white/40 focus:border-cyan-400 transition-colors"
                        placeholder="Project budget"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="message" 
                      className="text-cyan-300 text-base"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/5 border-2 border-cyan-500/30 text-white placeholder:text-white/40 focus:border-cyan-400 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg py-6 shadow-lg shadow-cyan-500/50 transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-cyan-500/20">
          <div className="container text-center">
            <p 
              className="text-cyan-100/60 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2025 DANVERSE - Muhammed Adel. All rights reserved.
            </p>
            <p 
              className="text-cyan-100/40 mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Alexandria, Egypt
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}


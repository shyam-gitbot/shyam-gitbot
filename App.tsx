import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Mail, Linkedin, Phone, 
  Brain, Code, Network, Zap, 
  Download, ExternalLink, ChevronRight, Cpu, Layers, GitBranch, Database
} from 'lucide-react';

import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from './constants';
import Section from './components/Section';
import SkillBadge from './components/SkillBadge';
import NeuralBackground from './components/NeuralBackground';

const App = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isRelevant = (skillsList: string[]) => {
    if (!activeSkill) return false;
    return skillsList.some(s => 
      s.toLowerCase().includes(activeSkill.toLowerCase()) || 
      activeSkill.toLowerCase().includes(s.toLowerCase())
    );
  };

  const NavLink = ({ href, text }: { href: string; text: string }) => (
    <a 
      href={href} 
      className="relative text-slate-400 hover:text-cyan-400 font-medium transition-colors group"
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
    </a>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 relative overflow-x-hidden">
      
      {/* Background Animation */}
      <NeuralBackground />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-cyan-900/30 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white flex items-center gap-2 tracking-tighter">
            <div className="bg-cyan-500/10 p-1.5 rounded border border-cyan-500/30 text-cyan-400">
              <Network size={20} />
            </div>
            <span>GD<span className="text-cyan-500">.Neural</span></span>
          </a>
          
          <div className="hidden md:flex gap-8">
            <NavLink href="#about" text="About" />
            <NavLink href="#journey" text="Journey" />
            <NavLink href="#research" text="Research" />
            <NavLink href="#skills" text="Synapse" />
            <NavLink href="#contact" text="Signal" />
          </div>

          <button 
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden">
            <NavLink href="#about" text="About" />
            <NavLink href="#journey" text="Journey" />
            <NavLink href="#research" text="Research" />
            <NavLink href="#skills" text="Synapse" />
            <NavLink href="#contact" text="Signal" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 min-h-screen flex items-center z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Online: Available for Hire
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
                Neural <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Architect</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto">
                Full-Stack Engineer merging biological systems with artificial intelligence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <a href="#contact" className="group bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center gap-2">
                Init Sequence <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#research" className="bg-transparent text-slate-300 border border-slate-700 px-8 py-4 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all">
                Explore Nodes
              </a>
            </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="Core Processor" icon={<Cpu />}>
        <div className="grid md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <p className="text-lg text-slate-300 leading-relaxed mb-6 font-light">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex gap-4 flex-wrap">
                 <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-800/30 rounded text-cyan-400 text-sm font-mono">
                    System.Status: Active
                 </div>
                 <div className="px-4 py-2 bg-violet-950/30 border border-violet-800/30 rounded text-violet-400 text-sm font-mono">
                    Location: India
                 </div>
              </div>
           </div>

           <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-1 rounded-2xl">
              <div className="h-full bg-slate-950/90 rounded-xl p-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ExternalLink size={100} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <GitBranch className="text-violet-500" /> Education
                 </h3>
                 <div className="space-y-6">
                    {EDUCATION.map((edu, i) => (
                      <div key={i} className="relative pl-4 border-l-2 border-slate-700">
                         <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500"></div>
                         <div className="font-bold text-slate-200">{edu.institution}</div>
                         <div className="text-sm text-slate-400 mt-1">{edu.degree}</div>
                         <div className="text-xs text-violet-400 font-mono mt-2">{edu.year}</div>
                         <div className="text-xs text-slate-500 mt-2 bg-slate-900/50 p-2 rounded">CGPA: 7.87/10</div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Journey Timeline Section (Experience) */}
      <Section id="journey" title="Journey Timeline" icon={<GitBranch />}>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-slate-800 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => {
              const highlight = isRelevant(exp.skillsUsed);
              const isEven = index % 2 === 0;

              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20 mt-1.5 md:mt-0"></div>

                  {/* Content Width Spacer */}
                  <div className="w-full md:w-1/2"></div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                     <div 
                        className={`
                          p-6 md:p-8 rounded-xl border backdrop-blur-sm transition-all duration-500
                          ${highlight 
                            ? 'bg-cyan-950/20 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                            : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'
                          }
                        `}
                     >
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                           <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900">{exp.period}</span>
                        </div>
                        <div className="text-violet-400 font-medium mb-4 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                           {exp.company}
                        </div>
                        <ul className="space-y-3 mb-6">
                           {exp.description.map((desc, i) => (
                             <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                               <span className="text-slate-600 mt-1">▹</span>
                               {desc}
                             </li>
                           ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                           {exp.skillsUsed.map(skill => (
                             <span key={skill} className={`text-xs px-2 py-1 rounded border ${activeSkill === skill ? 'border-cyan-400 text-cyan-300 bg-cyan-950' : 'border-slate-700 text-slate-500 bg-slate-950'}`}>
                                {skill}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Research Nodes (Projects) */}
      <Section id="research" title="Research Nodes" icon={<Layers />}>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => {
            const highlight = isRelevant(proj.skillsUsed);
            return (
              <div 
                key={proj.id}
                className={`
                  group relative bg-slate-900/40 rounded-2xl p-8 border backdrop-blur-sm overflow-hidden transition-all duration-300
                  ${highlight 
                    ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]' 
                    : 'border-slate-800 hover:border-slate-600 hover:shadow-xl'
                  }
                `}
              >
                {/* Holographic Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                       {proj.type === 'Technical' ? <Code size={24} /> : <Brain size={24} />}
                    </div>
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 hover:text-white hover:bg-slate-800 rounded-full transition-all z-20"
                        title="Open Project"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-cyan-500/50 underline-offset-4 decoration-2">
                        {proj.title}
                      </a>
                    ) : (
                      proj.title
                    )}
                  </h3>
                  <div className="text-sm text-violet-400 font-mono mb-6">{proj.period}</div>

                  <ul className="space-y-3 mb-8 flex-grow">
                     {proj.description.map((d, idx) => (
                       <li key={idx} className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4 group-hover:border-cyan-500/30 transition-colors">
                         {d}
                       </li>
                     ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.skillsUsed.map(skill => (
                      <span key={skill} className={`text-xs font-mono px-2 py-1 rounded ${activeSkill === skill ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-800 text-slate-400'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Skills Synapse Section */}
      <Section id="skills" title="Skill Synapse" icon={<Zap />}>
         <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.2)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-slate-400 mb-8 max-w-2xl font-light">
                Interact with the neural clusters below to visualize signal pathways across my experience and research projects.
              </p>
              
              <div className="space-y-8">
                {['AI/ML', 'Web', 'Tools', 'Languages'].map((cat) => (
                  <div key={cat}>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-0.5 bg-slate-500"></span>
                      {cat}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {SKILLS.filter(s => s.category === cat).map(skill => (
                        <SkillBadge 
                          key={skill.name} 
                          name={skill.name} 
                          isActive={activeSkill === skill.name}
                          onHover={setActiveSkill}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
         </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Establish Signal" icon={<Mail />}>
        <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Initialize Connection</h3>
            <p className="text-slate-400 max-w-2xl">
              Ready to deploy solutions? Open a communication channel for collaborations in AI agents, Full Stack architecture, or Research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 w-full">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group text-left">
              <div className="p-4 bg-cyan-950/30 text-cyan-400 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-500">Direct Protocol</div>
                <div className="font-mono text-slate-200">{PERSONAL_INFO.email}</div>
              </div>
            </a>

            <a href={`tel:${PERSONAL_INFO.phone.replace(/[^\d+]/g, '')}`} className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-violet-500/50 transition-all group text-left">
              <div className="p-4 bg-violet-950/30 text-violet-400 rounded-lg group-hover:bg-violet-500 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-slate-500">Voice Line</div>
                <div className="font-mono text-slate-200">{PERSONAL_INFO.phone}</div>
              </div>
            </a>
          </div>

          <a 
            href="/resume.pdf" 
            download="Ghanshyam_Didwaniya_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-lg hover:from-cyan-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] font-bold"
          >
             <Download size={20} />
             Download Data Log (Resume)
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-slate-900 py-12 px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-sm font-mono">
            © 2024 Ghanshyam Didwaniya. System All Green.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/bs20b016" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all"><Github /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all"><Linkedin /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-white hover:scale-110 transition-all"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
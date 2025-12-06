import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", icon }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 backdrop-blur-sm">
            {icon}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {title}
          </h2>
          {/* Decorative circuit line */}
          <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow ml-6 hidden md:block relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
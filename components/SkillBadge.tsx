import React from 'react';

interface SkillBadgeProps {
  name: string;
  category?: string;
  isActive: boolean;
  onHover: (name: string | null) => void;
  onClick?: () => void;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category, isActive, onHover, onClick }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out cursor-default border
        ${isActive 
          ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-105' 
          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-200 hover:shadow-[0_0_10px_rgba(6,182,212,0.1)]'
        }
      `}
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      {name}
      {category && (
        <span className={`ml-2 text-xs border-l pl-2 ${isActive ? 'border-cyan-500/30 text-cyan-100' : 'border-slate-700 text-slate-500'}`}>
          {category}
        </span>
      )}
    </button>
  );
};

export default SkillBadge;
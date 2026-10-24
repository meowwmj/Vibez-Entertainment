import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center p-1 rounded-md bg-white/95 border border-[#C8B6A5]/40 shadow-sm transition-transform duration-200 hover:scale-[1.02]">
        <img
          src="/assets/aistudio/ka_vibez_f3c4f0cc.jpg"
          alt="Vibez Entertainment Official Logo"
          referrerPolicy="no-referrer"
          className={`${sizeClasses[size]} object-contain max-w-[170px]`}
          loading="eager"
        />
      </div>
      {showTagline && (
        <div className="hidden lg:flex flex-col text-left">
          <span className="text-[11px] font-semibold tracking-wider text-[#35C84A] uppercase">
            Est. Oct 2011
          </span>
          <span className="text-xs text-[#C8B6A5]">
            Talent · Events · Records
          </span>
        </div>
      )}
    </div>
  );
};

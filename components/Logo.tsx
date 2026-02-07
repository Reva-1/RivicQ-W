import React from 'react';

const Logo: React.FC<{ className?: string, showTagline?: boolean, dark?: boolean }> = ({ className = "h-10", showTagline = true, dark = false }) => {
  const textColor = dark ? "text-white" : "text-black";
  const subTextColor = dark ? "text-gray-300" : "text-gray-900";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Stylized R Icon */}
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <path d="M40 45C40 47.7614 37.7614 50 35 50C32.2386 50 30 47.7614 30 45C30 42.2386 32.2386 40 35 40C37.7614 40 40 42.2386 40 45Z" fill="currentColor" className={textColor}/>
        <path d="M30 30H60C76.5685 30 90 43.4315 90 60C90 65.6565 88.2045 70.9169 85.103 75.346L70 95" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className={textColor}/>
        <path d="M35 50L55 70L75 95" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className={textColor}/>
      </svg>
      
      {/* Text Branding */}
      <div className="flex flex-col justify-center">
        <span className={`font-heading font-bold tracking-[0.2em] leading-none text-2xl ${textColor}`}>
          RIVIC
        </span>
        {showTagline && (
          <span className={`text-[0.6rem] uppercase tracking-[0.15em] font-medium mt-1 ${subTextColor}`}>
            Quantum Safe Security
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  showText?: boolean;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ showText = true, width = 50, height = 50 }) => {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Image src="/Logo.svg" alt="Logo DCrash" width={width} height={height} />
      {showText && <span className="logo-text">DCrash</span>}
    </div>
  );
};

export default Logo;

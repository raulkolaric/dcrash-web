//Logo.tsx

"use client";

import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 28, height = 28 }: LogoProps) {
  return (
    
      <Image src="/Logo.svg" alt="Logo" width={width} height={height} />

  );
}

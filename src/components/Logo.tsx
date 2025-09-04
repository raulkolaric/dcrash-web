import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 300, height = 300 }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Logo.svg"
        alt="Logo DCrash"
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
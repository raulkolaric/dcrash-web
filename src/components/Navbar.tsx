"use client";

export default function Navbar({ className = "" }) {
  return (
    <div className="w-[382px] h-[43px] bg-gradient-to-b from-[#D9D9D933] to-[#73737333] backdrop-blur-[17.1px] rounded-full text-white border-1 border-white flex gap-4 justify-evenly items-center text-[15px] font-thin">
      <p>Home</p>
      <p>Missão</p>
      <p>Futuro</p>
      <p>Features</p>
      <p>FAQ</p>
    </div>
  );
}

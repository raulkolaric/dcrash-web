"use client";

export default function Navbar({ className = "" }) {
  return (
    <div className="w-[382px] h-[43px] bg-gradient-to-b from-[#D9D9D933] to-[#73737333] backdrop-blur-[17.1px] rounded-full text-white border-1 border-white flex gap-4 justify-evenly items-center text-[16px] font-regular">
      
      <a href="#secao-home" className="hover:no-underline">Home</a>
      <a href="#secao-missao" className="hover:no-underline">Missão</a>
      <a href="#secao-futuro" className="hover:no-underline">Futuro</a>
      <a href="#secao-features" className="hover:no-underline">Features</a>
      <p>FAQ</p>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Missão", href: "/missao" },
    { name: "Futuro", href: "/futuro" },
    { name: "Features", href: "/features" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <div className="w-[382px] h-[43px] bg-white/20 text-thin rounded-full border-1 border-white flex gap-4 space justify-evenly p-2 text-white/80 text-[15px]">
      <p>Home</p>
      <p>Missão</p>
      <p>Futuro</p>
      <p>Features</p>
      <p>FAQ</p>
    </div>  
);
}


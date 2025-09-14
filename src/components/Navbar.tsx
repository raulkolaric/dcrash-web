"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLinks = ["Home", "Missão", "Futuro", "Features", "FAQ"];

  return (
    <div className="w-[382px] h-[43px] bg-white/80 rounded-full border-1 border-white flex gap-4 justify-evenly p-2 text-[15px] font-thin">
      <p>Home</p>
      <p>Missão</p>
      <p>Futuro</p>
      <p>Features</p>
      <p>FAQ</p>
    </div>  
);
}


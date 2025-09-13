"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLinks = ["Home", "Missão", "Futuro", "Features", "FAQ"];

  return (
    <div
      className="w-[382px] h-[43px] bg-[#737373] rounded-full border border-white flex gap-4 justify-evenly p-2 text-[15px] font-thin"
      style={{ color: "white" }}
    >
      <p>Home</p>
      <p>Missão</p>
      <p>Futuro</p>
      <p>Features</p>
      <p>FAQ</p>
    </div>  
);
}


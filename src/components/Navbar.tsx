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
    <div
      className="w-[382px] h-[43px] rounded-full flex justify-evenly items-center p-2 text-[15px] border-2 border-white bg-[#737373] text-white"
      style={{ border: "2px solid white" }}
    >
      {menuLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

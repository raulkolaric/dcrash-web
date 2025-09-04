"use client";

import { useState } from "react";
import Logo from "./Logo";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLinks = ["Home", "Missão", "Futuro", "Features", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50 px-6 py-4 flex items-center">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 w-1/4">
        <Logo />
      </div>

      {/* Links centralizados */}
      <ul className="hidden md:flex justify-center items-center gap-6 w-2/4">
        {menuLinks.map((link) => (
          <li key={link}>
            <a className="text-white font-bold hover:text-blue-400 px-3 py-1 rounded-full transition-colors cursor-pointer">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden md:flex items-center justify-end flex-shrink-0 w-1/4">
        <LoginButton
          borderColorClass="border-blue-500"
          backgroundColorClass="bg-blue-500"
        />
      </div>

      {/* Hamburger Menu - Mobile */}
      <button
        className="md:hidden ml-auto text-white font-bold text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menu Mobile */}
      {open && (
        <ul className="flex flex-col items-center gap-2 absolute top-full left-0 w-full bg-black px-6 py-4 md:hidden">
          {menuLinks.map((link) => (
            <li key={link}>
              <a className="text-white font-bold hover:text-blue-400 px-3 py-1 rounded-full transition-colors cursor-pointer">
                {link}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <LoginButton
              borderColorClass="border-blue-500"
              backgroundColorClass="bg-blue-500"
            />
          </li>
        </ul>
      )}
    </nav>
  );
}
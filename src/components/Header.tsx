"use client";

import Navbar from "./Navbar";
import Logo from "./Logo";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",  // retângulo preto
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      {/* Logo à esquerda */}
      <Logo width={28} height={28} />

      {/* Navbar centralizada, usando exatamente o componente existente */}
      <Navbar />

      {/* Botão de login à direita */}
      <LoginButton />
    </div>
  );
}

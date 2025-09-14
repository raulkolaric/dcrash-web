// page.tsx

import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import LoginButton from "../components/LoginButton";

export default function HomePage() {
  return (
    <header className="flex items-center justify-between px-[25px] bg-black shadow-md mt-[53px]">
      {/* Logo alinhada à esquerda */}
      <Logo width={40} height={40} />

      {/* Navbar central */}
      <Navbar />

      {/* Botão de login alinhado à direita */}
      <LoginButton />
    </header>
  );
}
// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import LoginButton from "@/components/LoginButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white min-h-screen">
        <header
          className="flex items-center justify-between px-[25px] bg-black shadow-md mt-[53px]"
        >
          {/* Logo alinhada à esquerda */}
          <Logo width={40} height={40} />

          {/* Navbar central */}
            <Navbar />

          {/* Botão de login alinhado à direita */}
          <LoginButton />
        </header>
      </body>
    </html>
  );
}

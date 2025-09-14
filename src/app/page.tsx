import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import LoginButton from "../components/LoginButton";
import LaurelBranchL from "@/components/SVG/LaurelBranchL";
import LaurelBranchR from "@/components/SVG/LaurelBranchR";

export default function HomePage() {
  return (
    <div className="bg-black w-full h-screen flex">
      <div className="bg-[#65D6DE]/43 w-[700px] h-[767px] rounded-full blur-[248.1px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 select-none "></div>
      <div className="z-10 max-w-[1320px] mx-auto justify-center min-h-screen w-full font-display">
        <header className="flex items-center justify-between mt-[53px]">
          <Logo width={40} height={40} />
          <Navbar />
          <LoginButton />
        </header>
        <div className="pt-20">
          <div className="text-white flex gap-2 justify-center ">
            <LaurelBranchL></LaurelBranchL>
            <p className="font-medium opacity-60 text-center text-[18px]">+100,000 ocorrências <br></br>armazenadas</p>
            <LaurelBranchR></LaurelBranchR>
          </div>
          <p className="text-center text-7xl pt-20 font-medium bg-gradient-to-r from-[#C7FBFF] to-[#80993A] bg-clip-text text-transparent">
            Solucionando as rodovias,<br />utilizando dados.
          </p>          
          <p className="text-white/70 font-extralight text-center pt-20 text-[20px]">Transformamos informações de acidentes em rodovias em insights <br></br> para prevenção, planejamento e segurança. Entenda o passado, <br></br> proteja o futuro do trânsito.</p>
        </div> 
      </div>
    </div>
  );
}



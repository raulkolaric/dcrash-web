import Navbar from "@/components/Navbar";
import LaurelBranchL from "@/components/SVG/LaurelBranchL";
import LaurelBranchR from "@/components/SVG/LaurelBranchR";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-full h-screen flex">
      <div className="bg-[#65D6DE]/43 w-[700px] h-[767px] rounded-full blur-[248.1px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 select-none "></div>
      <div className="z-10 max-w-[1320px] mx-auto justify-center min-h-screen w-full font-display">
        <div className="pt-20">
          <div className="text-white flex gap-2 justify-center ">
            <LaurelBranchL></LaurelBranchL>
            <p className="font-medium opacity-60 text-center text-[18px]">+100,000 ocorrências <br></br>armazenadas</p>
            <LaurelBranchR></LaurelBranchR>
          </div>
          <p className="text-gradient-to-b from-[#CBFBFF] to-[#80993A] text-center text-7xl pt-20 font-medium">Solucionando as rodovias,<br></br>utilizando dados.</p>
          <p className="text-white/70 font-extralight text-center pt-20 text-[20px]">Transformamos informações de acidentes em rodovias em insights <br></br> para prevenção, planejamento e segurança. Entenda o passado, <br></br> proteja o futuro do trânsito.</p>
        </div> 
      </div>
    </div>
  );
}

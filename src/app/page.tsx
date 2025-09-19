import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import LoginButton from "../components/LoginButton";
import LaurelBranchL from "../components/SVG/LaurelBranchL";
import LaurelBranchR from "../components/SVG/LaurelBranchR";

export default function HomePage() {
  return (
    <div className="bg-black w-full h-full flex relative">

      {/* Fundo blur no topo */}
      <div className="bg-[#65D6DE]/43 w-[700px] h-screen rounded-full blur-[248.1px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"></div>

      {/* Conteúdo principal */}
      <div className="z-10 max-w-[1320px] mx-auto justify-center min-h-screen w-full font-display">

        {/* Header */}
        <header className="flex items-center justify-between mt-[53px] relative">
          <Logo width={40} height={40} />
          <div className="absolute left-1/2 -translate-x-1/2">
            <Navbar />
          </div>
          <LoginButton />
        </header>

        {/* SEÇÃO HOME */}
        <section className="pt-20 md:pt-28 text-center">
          <div className="text-white flex gap-2 justify-center items-center">
            <LaurelBranchL />
            <p className="font-medium opacity-60 text-[19px] leading-[20px] text-center">
              +100,000 ocorrências <br />armazenadas
            </p>
            <LaurelBranchR />
          </div>

          <div className="flex flex-col items-center space-y-16 pt-20 md:pt-24">
            <p className="text-7xl font-medium bg-gradient-to-r from-[#C7FBFF] to-[#80993A] bg-clip-text text-transparent text-center">
              Solucionando as rodovias,<br />utilizando dados.
            </p>

            <p className="text-white/70 font-extralight text-[20px] text-center">
              Transformamos informações de acidentes em rodovias em insights <br />
              para prevenção, planejamento e segurança. Entenda o passado, <br />
              proteja o futuro do trânsito.
            </p>

            <a
              href="#secao-futuro"
              className="w-44 h-10 flex rounded-full border-2 border-[#BEDF03]/75 items-center justify-center bg-[#BEDF03]/80 text-white font-semibold text-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Veja mais
            </a>
          </div>
        </section>

        {/* SEÇÃO MISSÃO */}
        <section className="w-full bg-black py-60 md:py-60">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
            
            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src="/Estrada.svg"
                alt="Estrada"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-right md:ml-auto">
              <h2 className="text-[48px] font-semibold mb-6 text-[#C7FBFF] font-roboto">
                A nossa missão - <br />Protegendo as estradas
              </h2>

              <div className="text-white/70 text-[24px] leading-7 font-roboto font-light self-end w-[70%] space-y-6">
                <p>
                  As estradas conectam pessoas, sonhos e oportunidades. Mas, às vezes, também são palco de despedidas inesperadas. Nossa tecnologia nasceu de um propósito: o de reescrever esse roteiro.
                </p>
                <p>
                  Analisamos o passado não para contar histórias tristes, mas para garantir que elas não se repitam. Trabalhamos hoje para que amanhã, todos cheguem ao seu destino.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO FUTURO */}
        <section id="secao-futuro" className="w-full bg-black py-24 md:py-22">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">

            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
              <h2 className="text-[48px] font-semibold mb-6 font-roboto bg-gradient-to-r from-[#C7FBFF] to-[#80993A] bg-clip-text text-transparent flex flex-wrap items-center">
                O Futuro do Trânsito <br />
                <span className="flex items-center gap-4">
                  é Preditivo
                  <img
                    src="/Vetor.svg"
                    alt="Ícone decorativo"
                    className="inline-block w-10 h-10"
                  />
                </span>
              </h2>

              <p className="text-white/70 text-[20px] leading-7 font-roboto font-light w-[80%]">
                Utilizamos algoritmos de Machine Learning
                para processar variáveis complexas — de velocidade e clima a fatores humanos —
                e gerar insights que a análise tradicional não consegue ver. Nossa plataforma
                não apenas relata o que aconteceu, mas antecipa o que vai acontecer.
              </p>
            </div>

            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="p-4 border-2 border-white/50 border-dashed rounded-[30px]">
                <img
                  src="/Neuro.svg"
                  alt="Rede neural representando predição no trânsito"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO FEATURES */}
        <section className="w-full bg-black py-24 md:py-32 relative">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">

            {/* Imagem + legenda */}
            <div className="w-full md:w-3/5 flex flex-col items-center md:items-start relative -mt-1">
              <div className="absolute left-1/2 top-1/3 w-[800px] h-[800px] bg-[#FFFF00] opacity-[0.17] blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>

              <img
                src="/Rodovias_SP.svg"
                alt="Mapa das rodovias de SP"
                className="w-full h-auto relative z-10"
              />

              <p className="text-white/50 text-[13px] italic font-roboto font-extralight relative z-10 -translate-y-10">
                *renderização dos nossos GEOjsons
              </p>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-right md:ml-auto -mt-40">
              <h2 className="text-[48px] font-semibold mb-6 font-roboto bg-gradient-to-r from-[#FDFD2F] to-[#FFFFFF] bg-clip-text text-transparent flex flex-col items-end">
                <span>Seu Centro de Controle,</span>
                <span className="inline-flex items-center">
                  Direto no Mapa
                  <img
                    src="/Mapa.svg"
                    alt="Ícone do mapa"
                    className="w-10 h-10 ml-4 align-text-bottom"
                  />
                </span>
              </h2>

              <p className="text-white/70 text-[20px] leading-7 font-roboto font-light w-[80%] ml-auto">
                Navegue, filtre e cruze informações em tempo real. Nossa plataforma transforma o mapa em sua principal ferramenta de decisão, permitindo que você ative camadas de dados, como pontos críticos de acidentes e condições climáticas, para isolar variáveis, criar visualizações customizadas e entender exatamente o que está acontecendo na sua rodovia, agora.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
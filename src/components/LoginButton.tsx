export default function LoginButton() {
  return (
    <button
      className="w-[104px] h-[33px] px-4 py-2 rounded-full font-bold cursor-pointer"
      style={{
        backgroundColor: "#43999F",
        border: "2px solid #65D6DE",
        color: "black",
        boxShadow: "0 4px 6px rgba(101,214,222,0.5)", // sombra do botão (mesma cor da borda)
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      }}
    >
      Login
    </button>
  );
}
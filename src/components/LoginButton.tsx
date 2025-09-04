interface LoginButtonProps {
  onClick?: () => void;
  borderColorClass?: string;
  backgroundColorClass?: string;
}

export default function LoginButton({
  onClick,
  borderColorClass = "border-blue-500",
  backgroundColorClass = "bg-blue-500",
}: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 ${borderColorClass} ${backgroundColorClass}
        text-white font-bold
        px-4 py-2 rounded-full
        cursor-pointer
        transform transition-transform duration-200 hover:scale-110
      `}
    >
      Login
    </button>
  );
}

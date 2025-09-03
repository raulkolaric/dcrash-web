import { ReactNode } from 'react';

interface LoginButtonProps {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode; // ícone opcional
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ variant = 'primary', icon }) => {
  return (
    <button className={`btn ${variant}`}>
      {icon && <span className="icon">{icon}</span>}
      Login
    </button>
  );
};

export default LoginButton;
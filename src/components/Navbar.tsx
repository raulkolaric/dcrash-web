import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-actions">
        <LoginButton variant="primary" />
      </div>
    </nav>
  );
};

export default Navbar;

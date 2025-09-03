import React from 'react';
import Navbar from '../src/components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h1>Bem-vindo ao DCrash</h1>
        <p>Esta é a página inicial do projeto.</p>
      </main>
    </div>
  );
};

export default Home;

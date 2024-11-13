import React from 'react';
import Authentication from './Authentication';

const App = () => {
  const handleRegister = (data) => {
    console.log('Registered:', data);
  };

  return (
    <div>
      <Authentication onRegister={handleRegister} />
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = ""; 

function App() {
  return (
    <div className="App">
      <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '2rem' }}>
        <Image />
        <div className="card-body">
          <h5 className="card-title"><Name /></h5>
          <p className="card-text"><Description /></p>
          <p className="card-text"><Price /></p>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Hello, {firstName || 'there'}!
      </p>
      {firstName && (
        <img 
          src="https://via.placeholder.com/150" 
          alt="placeholder" 
          style={{ display: 'block', margin: 'auto' }} 
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="header text-center p-3 text-light mb-4">
        <h1>ATM Money Dispenser</h1>
      </header>
      <div className="wrapper">
        <div className="row">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

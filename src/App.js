import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          plantilla <code>src/App.js</code> eslint y prettier, para comentazar a trabajar
          con React
        </p>
        <p>
          Y pensar que al mirar esta plantilla, no sabia como comenzar con
          <strong>&nbsp;React&nbsp;</strong>ahora es mi mejor amigo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default App;

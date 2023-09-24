import React from 'react';
import Header from './components/template-parts/Header/Header';
import Footer from './components/template-parts/Footer/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        // Dein Hauptcontent
        <Footer />
      </div>
  );
}

export default App;



//Alt_
/*
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

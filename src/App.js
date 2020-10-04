import React from 'react';
import MainForm from './components/MainForm';
import Logo from './components/Logo';
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <div className="main--content" >
      <MainForm />
      <Logo />
      </div>
    </div>
  );
}

export default App;

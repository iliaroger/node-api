import React from 'react';
import './App.css';
import MainView from './components/mainView';

function App() {
  return (
    <div className="backgroundWrapper">
      <div className="container mainContainer">
        <MainView></MainView>
      </div>
    </div>
  );
}

export default App;

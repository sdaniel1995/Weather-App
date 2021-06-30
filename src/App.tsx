import React from 'react';
import Header from './components/Header';
import './css/App.css';
import Forecast from './components/Forecast';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Forecast/>
    </div>
  );
};

export default App;

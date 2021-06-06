import React from 'react';
import Header from './components/Header';
import Forecast from './components/Forecast';
import './css/App.css';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Forecast/>
    </div>
  );
};

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes';
import WeeklyForecastDetroit from './WeeklyForecast';


function App() {
  return (
    <div className="App">
      <WeeklyForecastDetroit/>
     <Quotes/>
    </div>
  );
}

export default App;

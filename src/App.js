import './App.css';

import CONTAIN from "./Component/contain"
import {WeatherProvider }from "./Component/Context/weatherContext"
function App() {
  return (
    <WeatherProvider>
    <div className="App">
    <h1 className="logo">Weather</h1>
   
    <CONTAIN/>
    </div>
    </WeatherProvider>
  );
}

export default App;

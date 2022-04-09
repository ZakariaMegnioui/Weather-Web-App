import React, { useContext } from 'react';
import './style/contain.css';
import {WeatherContext} from './Context/weatherContext';

const Contain = ()=>{
    const value = useContext(WeatherContext)
    function calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
      }
    const update = (e)=>{   
        value.setCity(e.target.value)
    }
    return(
     
        <div className="e">
              
              <div className="form-section">
           
           <h1 className="big-tittel">Hello Matt</h1>
           <p className="small-tittel">Chek the weather by the city</p>
          
           <form onSubmit={value.getWeatherStateByCity}>
               <input type="text" placeholder="Search by city..." onChange={update}  value={value.city} name="city"/>
           </form>
       </div>
       { value.err ? (<div className="containe"> <p className="city-state"> {value.weather.message}</p> </div>): value.weather.main.temp && (
           <div className="containe">
             
            <div className="city">
             <h2 className="city-name">
            <span>{value.weather.name}</span>
            <sup>{value.weather.sys.country}</sup></h2>
         </div>

               <div className="city-temp">
                        {calCelsius(value.weather.main.temp)}
                     <sup>°C</sup></div>
                     <div className="info">
                      <img className="icon-city" src={`https://openweathermap.org/img/wn/${value.weather.weather[0].icon}@2x.png`} alt="" />
    
                      <p className="city-state">{value.weather.weather[0].description}</p>
                              </div>
       </div>
       )}
    

      
      
        </div>
    )
}

export default Contain;
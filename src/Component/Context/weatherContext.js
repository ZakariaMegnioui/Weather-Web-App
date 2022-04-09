import React, { useState , createContext , useEffect } from 'react';
export const WeatherContext= createContext();
export const WeatherProvider = props =>{
  const [city , setCity] = useState("");
  const [httpStatusCode, setHttpStatusCode] = useState("");
  const [err, setErr] = useState(false);
  const [weather , setWeather] = useState({
    main:{},
    weather:[{description:"" , icon : ""} ],
    sys:{},
    name:""
 
  });
 
  const API_KEY = '8d8cd993140755504f846611a6709aa0';

  
 
 
   const getWeatherStateByCity= async (e)=>{
     e.preventDefault();
    if (city.trim() === "") {
      return;
    }
    
      const respons= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const weatherState = await respons.json();
      setHttpStatusCode(weatherState.cod)
      setWeather(weatherState)    
         setCity("")
        
        
   }
   useEffect(()=>{
      if (httpStatusCode=="404") {
      setErr(true)
      
    } else {
      setErr(false)
   
    }
  
   },[httpStatusCode])
  
    return(
        <WeatherContext.Provider value={{err, weather,  city , setCity , getWeatherStateByCity} }>
            {props.children}
            </WeatherContext.Provider>
    )
}

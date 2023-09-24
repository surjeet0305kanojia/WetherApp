import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import clouds_icon from "../Assets/clouds.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
// import mist_icon from "../Assets/mist.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

export const WeatherApp = () => {
    let api_key="9aa88f3731e44721e2499fa2a59b2618";
    const [wicon,seticon]=useState(clouds_icon)



    const search=async () =>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
        let response=await fetch(url);
        let data = await response.json();
        const humidity =document.getElementsByClassName("humidity");
        const wind=document.getElementsByClassName("wind-speed");
        const temp= document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("location");
        
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" KM/h";
        temp[0].innerHTML=Math.floor(data.main.temp)+"°C";
        location[0].innerHTML=data.name;
        
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"  ){
            seticon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            seticon(clouds_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            seticon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            seticon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            seticon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            seticon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            seticon(snow_icon);
        }
        else{
            seticon(clear_icon);
        }
        


    }




  return (
    <div className="container">
         <div className="top-bar">
              <input type="text" className="cityInput" placeholder='Search' />
              <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
              </div>
        
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">34°C</div>
      <div className="location">Hoshiarpur</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>

        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="wind-speed">14 km/hr</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

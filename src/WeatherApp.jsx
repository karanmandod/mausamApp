import { dividerClasses } from "@mui/material/Divider";
import SearchBox from "./searchbox"
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]= useState({
        feelsLike: 11.77,
        humidity: 94,
        seaLevel: 1014,
        temp: 12.05,
        tempMax: 12.05,
        tempMin: 12.05,
        weather: "fog",
    });
    let updateInfo=(newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(<div style={{textAlign:"center"}}>
        <h2>Mausam App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>)
}
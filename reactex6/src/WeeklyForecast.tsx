import React, {useState, useEffect} from "react";
import WeatherForecast, { Periods } from '../models/WeatherForecase';
import GetForecast from "./services/GetForecast";

interface Props {
    forecast: WeatherForecast;
}

export default function WeeklyForecastDetroit({forecast} : Props) {
    const [weeklyForecast, setWeeklyForecast] = useState<Periods[]>([])
    useEffect(() => {
        GetForecast().then(data => {
            setWeeklyForecast(data);
        });
    }, []);
    return (
        <div className = "ForecastContainer">
            <h1>Detroit Weekly Forecast</h1>
            { <ul>
                {weeklyForecast.map((forecast, i) =>
                   <li key={i} > <h2>{forecast.name}</h2>
                   <h3>{forecast.temperature}</h3>
                   <h3>{forecast.detailedForecase}</h3></li> )}
            </ul>}
        </div>
    )
}
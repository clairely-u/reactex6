import axios from "axios";
import WeatherForecast, {Periods, Properties} from "../../models/WeatherForecase";

export default function GetForecast(): Promise<Periods[]> {
    return axios
    .get<WeatherForecast>("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then((response) => {
        return response.data.properties.periods;
    })
}
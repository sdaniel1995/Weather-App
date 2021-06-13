import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';
import LocalForecast from './LocalForecast';
import WeeklyForecast from './WeeklyForecast';
import SeaForecast from './SeaForecast';
import '../css/Forecast.css'


const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    }); 

    const weekDays: Array<string> = [
        "Sunday", 
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return (
        <div className="forecast">
            <div className="sea-daily-report">
                {weatherData == null ? "": <LocalForecast title="Local Daily Weather Report" data={weatherData} days={weekDays} icon={"http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + ".png"}/>}
                {weatherData == null ? "": <SeaForecast title= "Local Sea Forecast Report" data={weatherData} />}
            </div>
            {weatherData == null ? "": <WeeklyForecast data={weatherData} days={weekDays} icon={"http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + ".png"}/>}
        </div>
    );
};

export default Forecast;

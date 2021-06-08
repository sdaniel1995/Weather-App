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
                {weatherData == null ? "": <LocalForecast title="Local Daily Weather Report" data={weatherData} days={weekDays}/>}
                {weatherData == null ? "": <SeaForecast title= "Local Sea Forecast Report" data={weatherData} />}
            </div>
            {weatherData == null ? "": <WeeklyForecast title="Local Weekly Weather Report" data={weatherData} days={weekDays}/>}
        </div>
    );
};

export default Forecast;

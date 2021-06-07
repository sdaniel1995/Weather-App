import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';
import LocalForecast from './LocalForecast';
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

    console.log(weatherData);
    return (
        <div className="forecast">
            {weatherData == null ? "": <LocalForecast title="Local Weather Report" data={weatherData} days={weekDays}/>}
        </div>
    )
}

export default Forecast

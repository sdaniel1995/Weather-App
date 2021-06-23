import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';
import WeeklyForecast from './WeeklyForecast';
import '../css/Forecast.css'


const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    }); 

    console.log(weatherData);

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
            {weatherData && <WeeklyForecast data={weatherData} days={weekDays} icon={"http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + ".png"}/>}
        </div>
    );
};

export default Forecast;

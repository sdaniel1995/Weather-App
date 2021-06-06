import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';
import LocalForecast from './LocalForecast';
import WeeklyForecast from './WeeklyForecast';
import '../css/Forecast.css'


const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    });

    return (
        <div className="forecast">
            {weatherData == null ? "": weatherData.current.clouds}
            <LocalForecast title="Local Forecast"/>
        </div>
    )
}

export default Forecast

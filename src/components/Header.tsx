import  { useState } from 'react';
import { getWeather } from '../services/actions/GetWeather';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import '../css/Header.css';

const Header = () => {
    const [city, setCity] = useState<string>("");
    const dispatch = useDispatch();
    let lattitude: string = "";
    let longitude: string = "";

    //icon={"http://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + ".png"}
    
    (async() => {
            const coordinates = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Lexington&appid=af5bb8137fc355729a0a65a1f7a87d12");
            lattitude = coordinates.data.coord.lat;
            longitude = coordinates.data.coord.lon;
            const weather = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&exclude=hourly&appid=af5bb8137fc355729a0a65a1f7a87d12");
            dispatch(getWeather(weather.data));
    })();

    async function getWeatherData() {
        const coordinates = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=af5bb8137fc355729a0a65a1f7a87d12");
        lattitude = coordinates.data.coord.lat;
        longitude = coordinates.data.coord.lon;
        const weather = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&exclude=hourly&appid=af5bb8137fc355729a0a65a1f7a87d12");
        dispatch(getWeather(weather.data));
    }

    function search (event: any) {
        if (event.key === 'Enter') {
           getWeatherData();
        }
    }

    return (
        <div className='header'>
            <div className="searchBar">
                <input type="text" placeholder="Search City" id="search" onChange={event => setCity(event.target.value)} onKeyPress={search}/>
                <SearchIcon className="searchBar-searchIcon" onClick={getWeatherData}/>
            </div>
        </div>
    );
};

export default Header;

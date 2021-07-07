import  { useState } from 'react';
import { getWeather } from '../services/actions/GetWeather';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import '../css/Header.css';
import AppLogo from '../images/logo.png';

const Header = () => {
    const [city, setCity] = useState<string>("");
    const dispatch = useDispatch();
    let lattitude: string = "";
    let longitude: string = "";
    
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
            <div className="appLogo-appName">
                <img className="appLogo" src={AppLogo} /> 
                <h2>HD Weather</h2>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search City" id="search" onChange={event => setCity(event.target.value)} onKeyPress={search}/>
                <SearchIcon className="searchBar-searchIcon" onClick={getWeatherData}/>
            </div>
            <div className="menu" style={{marginRight: "20px"}}><MenuIcon/></div>
        </div>
    );
};

export default Header;

import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import '../css/Header.css';

const Header = () => {
    const [city, setCity] = useState<string>();
    const api = "http://api.openweathermap.org/data/2.5/weather?appid=af5bb8137fc355729a0a65a1f7a87d12&q=";

    function getWeather() {
        axios.get(api + city)
        .then(resp => {
            console.log(resp);
        })
        .catch (error => {
            console.log(error);
        });
    }

    function search (event: any) {
        if (event.key === 'Enter') {
            getWeather();
        }
    }

    return (
        <div className='header'>
            <div className="searchBar">
                <SearchIcon className="searchBar-searchIcon" onClick={getWeather}/>
                <input type="text" placeholder="Search City" id="search" onChange={event => setCity(event.target.value)} onKeyPress={search}/>
            </div>
        </div>
    );
};

export default Header

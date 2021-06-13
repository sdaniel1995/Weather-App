import '../css/SeaForecast.css';

const SeaForecast = ({title, data}: any) => {
    return (
        <div className="seaForecast">
            <div className="seaForecast-title">{title}</div>
            <div className="seaForecast-main">
                <p>Visibility.................................{data.current.visibility / 1000} km</p>
                <p>Wind Direction.............................{data.current.wind_deg} degrees</p>
                {data.current.wind_gust && <p>Wind Gust..................................{(data.current.wind_gust * 2.237).toFixed(0)} mph</p>}
                <p>Wind Speed.................................{(data.current.wind_speed * 2.237).toFixed(0)} mph</p>
                <p>Cloud Cover (%)............................{data.current.clouds}</p>
            </div>
        </div>
    );
};

export default SeaForecast;

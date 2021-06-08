import '../css/SeaForecast.css';

const SeaForecast = (props: any) => {
    return (
        <div className="seaForecast">
            <div className="seaForecast-title">{props.title}</div>
            <div className="seaForecast-main">
                <p>Visibility.................................{props.data.current.visibility}</p>
                <p>Wind Direction.............................{props.data.current.wind_deg}</p>
                <p>Wind Gust..................................{props.data.current.wind_gust}</p>
                <p>Wind Speed.................................{props.data.current.wind_speed}</p>
                <p>Cloud Cover (%)............................{props.data.current.clouds}</p>
            </div>
        </div>
    );
};

export default SeaForecast;

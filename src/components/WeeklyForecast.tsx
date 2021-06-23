import '../css/WeeklyForecast.css';
import Days from './Days';

export function convertToFarenheit(input: number) {
    return(((input - 273.15) * (9/5) + 32).toFixed(2));
}

export function convertToCelsius(input: number) {
    return((input - 273.15).toFixed(2));
}

const WeeklyForecast = ({title, data, days, icon}: any) => {

    return (
        <div className="weeklyForecast">
            <div className="weeklyForecast-main">
                <Days data={data.daily[0]} icon={"http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + ".png"}/>
                <Days data={data.daily[1]} icon={"http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png"}/>
                <Days data={data.daily[2]} icon={"http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"}/>
                <Days data={data.daily[3]} icon={"http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png"}/>
                <Days data={data.daily[4]} icon={"http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png"}/>
                <Days data={data.daily[5]} icon={"http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png"}/>
                <Days data={data.daily[6]} icon={"http://openweathermap.org/img/wn/" + data.daily[6].weather[0].icon + ".png"}/>
            </div>
        </div>
    );
};

export default WeeklyForecast;

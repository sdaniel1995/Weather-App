import '../css/WeeklyForecast.css';
import Days from './Days';

const WeeklyForecast = ({title, data, days, icon}: any) => {

    return (
        <div className="weeklyForecast">
            <div className="weeklyForecast-main">
                <Days/>
                <Days/>
                <Days/>
                <Days/>
                <Days/>
                <Days/>
                <Days/>
                <Days/>
            </div>
        </div>
    );
};

export default WeeklyForecast;

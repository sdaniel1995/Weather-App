import '../css/WeeklyForecast.css';

const WeeklyForecast = (props: any) => {

    return (
        <div className="weeklyForecast">
           {props.title}
        </div>
    );
};

export default WeeklyForecast;

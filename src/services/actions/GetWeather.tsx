export const getWeather = (weatherData: any) => {
    return {
        type: "GET_WEATHER",
        data: weatherData
    };
}


export const weatherReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case "GET_WEATHER":
            state = action.data;
            return state;
        default:
            return state;
    }
};

export default weatherReducer;

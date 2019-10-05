export default (state = [], action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            return [...state,action.payload];
        case 'CANCEL_RESERVE' :
            console.log("DO USUNIECIA",action.payload);
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
};

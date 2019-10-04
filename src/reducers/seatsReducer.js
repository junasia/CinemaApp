export default (state = [], action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            return [...state,action.payload];
        case 'CANCEL_RESERVE' :
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
};

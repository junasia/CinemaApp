export default (state = [], action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            let s = [...state];
            return s;
        case 'CANCEL_SEAT_RESERVATION':
            console.log('DO USUNIECIA', action.payload);
            return state.filter(id => id !== action.payload);
        default:
            return state;
    }
};

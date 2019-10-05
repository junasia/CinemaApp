export default (state = { seats: [], reservations: [] }, action) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            let s = { ...state };
            if (!s.reservations) s.reservations = [];
            s.reservations.push(action.payload);
            return s;
        case 'CANCEL_RESERVE':
            console.log(
                'DO USUNIECIA',
                action.payload,
                state.reservations[0],
                action.payload.valueOf() !== state.reservations[0].valueOf(),
                '0/0' == action.payload
            );
            return { ...state, reservations: state.reservations.filter(id => id !== action.payload) };
        case 'FETCH_SEATS':
            return { ...state, seance: action.payload.id, seats: action.payload.seats, reservations: [] };
        default:
            return state;
    }
};

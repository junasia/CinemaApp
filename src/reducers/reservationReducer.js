export default (
    state = { seats: [], reservations: [], postedReservation: { reservation: null, response: null } },
    action
) => {
    switch (action.type) {
        case 'RESERVE_SEAT':
            let s = { ...state };
            if (!s.reservations) s.reservations = [];
            s.reservations.push(action.payload);
            return s;
        case 'CANCEL_RESERVE':
            return { ...state, reservations: state.reservations.filter(id => id !== action.payload) };
        case 'FETCH_SEATS':
            return {
                ...state,
                seance: action.payload.id,
                seats: action.payload.seats,
                reservations: [],
                postedReservation: { reservation: null, response: null },
                film: action.payload.film
            };
        case 'POST_RESERVATION': {
            return {
                ...state,
                postedReservation: {
                    reservation: action.payload.reservation,
                    response: action.payload.response
                }
            };
        }
        default:
            return state;
    }
};

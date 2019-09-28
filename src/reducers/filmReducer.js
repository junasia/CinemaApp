export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FILM':
            return action.payload;
        default:
            return state;
    }
};

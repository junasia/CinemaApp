export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CINEMAS':
            return action.payload;
        default:
            return state;
    }
};

export default (state = null, action) => {
    switch (action.type) {
        case 'SAVE_CINEMA':
            return action.payload;
        default:
            return state;
    }
};

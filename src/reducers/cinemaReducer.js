export default (state = '10589', action) => {
    switch (action.type) {
        case 'SAVE_CINEMA':
            return action.payload;
        default:
            return state;
    }
};

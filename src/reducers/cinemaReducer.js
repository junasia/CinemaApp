export default (state = '5d93af0a4d62591ddcfa0f4a', action) => {
    switch (action.type) {
        case 'SAVE_CINEMA':
            return action.payload;
        default:
            return state;
    }
};

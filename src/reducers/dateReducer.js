export default (state = new Date(Date.now()), action) => {
    switch (action.type) {
        case 'SAVE_DATE':
            return new Date(action.payload);
        default:
            return state;
    }
};

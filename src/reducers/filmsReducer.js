export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FILMS':
            return action.payload;
        case 'SAVE_DATE':
            let s = [...state].map(x => {
                x.day = x.days.find(x => {
                    let d = new Date(action.payload);
                    d.setHours(0, 0, 0, 0);
                    return new Date(x.date).getTime() === d.getTime();
                });
                return x;
            });
            return s;
        default:
            return state;
    }
};

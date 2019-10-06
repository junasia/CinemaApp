import axios from 'axios';

export default axios.create({
    baseURL: 'https://vast-citadel-46907.herokuapp.com/api/'
    //baseURL: 'https://limitless-reaches-99124.herokuapp.com/api/'
});

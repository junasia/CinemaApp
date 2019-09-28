import axios from 'axios';

export default axios.create({
    baseURL: 'http://omdbapi.com/?apikey=144de458&'
});

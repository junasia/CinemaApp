const fetch = require('node-fetch')

const ProgramAPI = {
    _connectionLink: "https://api.cinelist.co.uk/get/times/cinema/",
    getConnectionLinkFromInput: function(id, input) {
        return this._connectionLink + id + '?day=' + input
    },
    
    fetchProgram: async function(id, input = '') {
        if (isNaN(input) || input > 7 || input < 1) return [];
        let conn = this.getConnectionLinkFromInput(id, input);
        let program = fetch(conn)
            .then(response => response.json())
            .then(data => data.listings)
            .catch(err => err);
        return await program || [];
    }
}

const FilmAPI = {
    _connectionLinks: "http://omdbapi.com/?apikey=144de458",
    getConnectionLinkFromInput: function(input) {
        return this._connectionLinks + '&t=' + input
    },

    fetchFilm: async function(input = '') {
        if (!input) return [];
        let conn = this.getConnectionLinkFromInput(input);
        let film = fetch(conn)
            .then(response => response.json())
            .then(data => data)
            .catch(err => err);
        return await film;
    }
}

module.exports.ProgramAPI = ProgramAPI;
module.exports.FilmAPI = FilmAPI;

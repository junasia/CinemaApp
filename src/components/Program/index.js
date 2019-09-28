import React from 'react';
import { connect } from 'react-redux';
import FilmList from './FilmList';
import { fetchFilms } from '../../actions';
import '../../css/Program.css';

class Program extends React.Component {
    render() {
        return (
            <div className="program">
                <p>List of today's films: </p>
                <FilmList />
            </div>
        );
    }
}

export default connect(
    null,
    { fetchFilms }
)(Program);

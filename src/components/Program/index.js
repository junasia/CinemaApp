import React from 'react';
import { connect } from 'react-redux';
import FilmList from './FilmList';
import { fetchFilms } from '../../actions';
import ProgramSettings from './ProgramSettings';
import FilmPosters from './FilmPosters';

class Program extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center position-relative pb-5">
                <ProgramSettings />
                <FilmPosters />
                <FilmList />
            </div>
        );
    }
}

export default connect(
    null,
    { fetchFilms }
)(Program);

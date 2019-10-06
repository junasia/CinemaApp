import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import FilmInfo from './FilmInfo';
import Reservation from './Reservation';

class Film extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-column align-items-center position-relative pb-5">
                    <ul className="list-group list-group-flush mt-3 width-80">
                        <li className="list-group-item">
                            <div className="media row">
                                <FilmInfo />
                                <Reservation />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    renderFilm() {
        if (!this.props.film) return null;
        const film = this.props.film;

        let info = [];
        for (const x in film) {
            info.push(
                <div>
                    <b>{x + ': '}</b> {'' + film[x]}
                </div>
            );
        }

        return (
            <div className="film-details">
                <img src={film.Poster} alt="poster" />
                <div className="film-info">
                    <div>{info}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { film: state.film };
};

export default connect(
    mapStateToProps,
    { fetchFilm }
)(Film);

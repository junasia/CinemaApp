import React from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../actions';
import '../../css/Film.css';

class Film extends React.Component {
    componentDidMount() {
        this.props.fetchFilm(this.props.match.params.id);
    }

    render() {
        return <div>{this.renderFilm()}</div>;
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
                <img src={film.Poster} />
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

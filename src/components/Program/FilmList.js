import React from 'react';
import Film from './Film';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions';

class FilmList extends React.Component {
    componentDidMount() {
        this.props.fetchFilms('Batman');
    }

    render() {
        return <div className="film-list">{this.renderList()}</div>;
    }

    renderList() {
        if (!this.props.films) return <div />;
        return this.props.films.map(x => {
            return <Film key={x.imdbID} film={x} />;
        });
    }
}

const mapStateToProps = state => {
    return { films: state.films };
};

export default connect(
    mapStateToProps,
    { fetchFilms }
)(FilmList);

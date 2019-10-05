import React from 'react';
import Film from './Film';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions';

class FilmList extends React.Component {
    componentDidMount() {
        this.props.fetchFilms(this.props.cinema);
    }

    render() {
        return <ul className="list-group list-group-flush width-80">{this.renderList()}</ul>;
    }

    renderList() {
        if (!this.props.films) return <div />;
        console.log('fff: ', this.props.films);
        return this.props.films.map(x => {
            return <Film key={x.imdbID} film={x} />;
        });
    }
}

const mapStateToProps = state => {
    return { films: state.films, cinema: state.cinema };
};

export default connect(
    mapStateToProps,
    { fetchFilms }
)(FilmList);

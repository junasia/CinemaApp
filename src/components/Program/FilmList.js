import React from 'react';
import axios from 'axios';
import Film from './Film';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions';

class FilmList extends React.Component {
    componentDidMount() {
        this.props.fetchFilms('5d93af0a4d62591ddcfa0f4b');
    }

    render() {
        return <ul className="list-group list-group-flush width-80">{this.renderList()}</ul>;
    }

    renderList() {
        if (!this.props.films) return <div />;
        console.log('films', this.props.films);
        return this.props.films.map(x => {
            return <Film key={x.movie._id} film={x} />;
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

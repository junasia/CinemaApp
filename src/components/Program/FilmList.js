import React from 'react';
import axios from 'axios';
import Film from './Film';
import { connect } from 'react-redux';
import { fetchFilms } from '../../actions';

class FilmList extends React.Component {
    componentDidMount() {
        this.props.fetchFilms(this.props.cinema);
    }

    // async componentDidUpdate() {
    //     await this.props.fetchFilms(this.props.cinema);
    //     console.log("AKTUALIZACJA !!!",this.props)
    // }

    render() {
        return <ul className="list-group list-group-flush width-80">{this.renderList()}</ul>;
    }

    renderList() {
        //console.log('Wywolano renderList');
        if (!this.props.films) return <div />;
        return this.props.films.map(x => {
            return <Film key={x.movie._id} film={x} />;
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

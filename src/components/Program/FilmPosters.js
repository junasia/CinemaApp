import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FilmPosters extends React.Component {
    render() {
        return (
            <ul className="list-group list-group-flush width-80">
                <li className="list-group-item d-flex justify-content-around flex-wrap">{this.renderList()}</li>
            </ul>
        );
    }

    renderList() {
        if (!this.props.films) return <div />;
        return this.props.films.slice(0, 6).map(x => {
            return (
                <Link to={'/film/' + x.imdbID} key={x.imdbID} style={{ textDecoration: 'none', color: 'black' }}>
                    <figure className="m-2">
                        <img src={x.poster} className="img-thumbnail" alt={x.name} />
                        <figcaption className="text-center">
                            <h6>{x.name}</h6>
                        </figcaption>
                    </figure>
                </Link>
            );
        });
    }
}

const mapStateToProps = state => {
    return { films: state.films };
};

export default connect(mapStateToProps)(FilmPosters);

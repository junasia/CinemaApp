import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FilmPosters extends React.Component {
    render() {
        return (
            <ul className="list-group list-group-flush width-80">
                <li class="list-group-item d-flex justify-content-around flex-wrap">{this.renderList()}</li>
            </ul>
        );
    }

    renderList() {
        if (!this.props.films) return <div />;
        return this.props.films.slice(0, 6).map(x => {
            return (
                <figure class="m-2">
                    <Link to={'/film/' + x.imdbID}>
                        <img src={x.poster} class="img-thumbnail" alt={x.name} />
                        <figcaption class="text-center">
                            <h6>{x.name}</h6>
                        </figcaption>
                    </Link>
                </figure>
            );
        });
    }
}

const mapStateToProps = state => {
    return { films: state.films };
};

export default connect(mapStateToProps)(FilmPosters);

import React, { Component } from 'react';
import { fetchFilms, fetchCinemas, saveCinema, saveDate } from '../../actions';
import { connect } from 'react-redux';

class ProgramSettings extends Component {
    changeCinema = e => {
        this.props.saveCinema(e.target.value);
        this.props.fetchFilms(e.target.value, true);
    };

    changeDate = e => {
        this.props.saveDate(e.target.value);
    };

    componentDidMount() {
        this.props.fetchCinemas();
        this.props.saveCinema(Date.now());
    }

    dateToString(input, addDays) {
        let date = new Date(input);
        if (addDays) date.setDate(date.getDate() + addDays);
        let year = date.getYear() + 1900;
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return year + '-' + month + '-' + day;
    }

    render() {
        return (
            <div className="jumbotron pt-3 mt-3 width-80">
                <h1 className="display-4">Reserve now!</h1>
                <p className="lead">Everyone wants to have the best seats. Be faster and reserve it here!</p>
                <hr className="my-4" />
                <form>
                    <div className="form-row">
                        <div className="col-sm-6">
                            <label htmlFor="inputDate">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="inputDate"
                                onChange={this.changeDate}
                                value={this.dateToString(this.props.date)}
                                min={this.dateToString(Date.now())}
                                max={this.dateToString(Date.now(), 5)}
                            />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="inputCinema">Cinema</label>
                            <select id="inputCinema" className="form-control" onChange={this.changeCinema}>
                                {this.renderCinemas()}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    renderCinemas() {
        if (!this.props.cinemas) return <div />;
        return this.props.cinemas.map(cinema => {
            return (
                <option value={cinema.id} key={cinema.id}>
                    {cinema.name}
                </option>
            );
        });
    }
}

const mapStateToProps = state => {
    return { cinemas: state.cinemas, cinema: state.cinema, date: state.date };
};

export default connect(
    mapStateToProps,
    { fetchFilms, fetchCinemas, saveCinema, saveDate }
)(ProgramSettings);

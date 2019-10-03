import React, {Component} from 'react';
import { fetchCinemas } from '../../actions';
import { connect } from 'react-redux';

class ProgramSettings extends Component {

   
    componentDidMount() {
        this.props.fetchCinemas();
    }


    render() {
        return (
        <div className="jumbotron pt-3 mt-3 width-80">
            <h1 className="display-4">Reserve now!</h1>
            <p className="lead">Everyone wants to have the best seats. Be faster and reserve it here!</p>
            <hr className="my-4"/>
            <form>
                <div className="form-row">
                    <div className="col-sm-6">
                        <label for="inputDate">Date</label>
                        <input type="date" className="form-control" id="inputDate" value="2019-10-01" min="2019-10-01" max="2019-10-08"/>
                    </div>
                    <div className="col-sm-6">
                        <label for="inputCinema">Cinema</label>
                        <select id="inputCinema" className="form-control" >
                            {this.renderCinemas()}
                        </select>
                    </div>
                </div>
            </form>
        </div>
        );
    }

    renderCinemas() {
        if(!this.props.cinemas) return <div />;
        console.log('cinemas',this.props.cinemas);
        return this.props.cinemas.map(cinema => {
            return <option key={cinema.id}>{cinema.name}</option>
        })
    }

}

const mapStateToProps = state => {
    return {cinemas: state.cinemas}
}

export default connect(mapStateToProps,{fetchCinemas})(ProgramSettings);
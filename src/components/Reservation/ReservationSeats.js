import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { reserveSeat,cancelReserve } from '../../actions';

class ReservationSeats extends Component {


    callThis = e => {
       if(this.props.reservedSeats.includes(e.target.value)){
           this.props.cancelReserve(e.target.value);
       }
       this.props.reserveSeat(e.target.value);
    };

     renderNumberOfSeat = seat => {
        if(seat.length === 3) {
            return seat[0] + seat[2];
        }
        return seat[0] + seat[2] + seat[3];
    }

    logSeats = () => {
        console.log(this.props.reservedSeats);
    }

    renderSeats() {
        let seatsArr = []
        for(let i=65; i<74;i++) {
            for(let j=1; j<11; j++) {
                var chr = String.fromCharCode(i) + "/" + j
                seatsArr.push(chr);
            }
        }
        let buttons = seatsArr.map(seat =>{return <button onClick={this.callThis} value={seat} type="button" id={seat} className="btn btn-success btn-sm" style={{gridArea:seat,fontSize:'11px'}}>{this.renderNumberOfSeat(seat)}</button>});
        return <div className="seats-container mt-4">{buttons}</div>
    }

    render() {
        return (
                    <div>
                        <container class="d-flex flex-column align-items-center position-relative pb-5 pt-4">
                        <div class="jumbotron pt-3 mt-3 width-80">
                            <h1 class="display-4">Choose seat</h1>
                            <p class="lead">Find seat, which is the most suitable for you and click on it.</p>
                            <hr class="my-4" />
                            <h5>Title: The Lion King</h5>
                                <form>
                                    <div class="form-row">
                                        <div class="col-sm-6">
                                            <label for="inputDate">Date</label>
                                            <input type="date" class="form-control" id="inputDate" value="2019-10-01" min="2019-10-01" max="2019-10-08"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="inputTime">Time</label>
                                            <select id="inputTime" class="form-control">
                                                <option selected>13:00</option>
                                                <option>15:00</option>
                                                <option>17:30</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>  
                     </div>
                            <ul className="list-group list-group-flush width-80">
                                <li className="list-group-item d-flex justify-content-around">
                                        <span className="badge badge-secondary">Not available</span>
                                        <span className="badge badge-success">Available</span>
                                        <span className="badge badge-danger">Your choice</span>
                                
                                </li>
                                <li className="list-group-item d-flex flex-column align-items-center">
                                    <div className="screen text-center"><small>SCREEN</small></div>
                                    {this.renderSeats()}
                                    <div className="d-flex justify-content-around w-100 mt-5">
                                    <button onClick={this.logSeats} type="button" className="btn btn-success btn-lg">CHECK PROPS</button>
                                        <a className="btn btn-warning" href="index.html" role="button">Back</a>
                                        <a  className="btn btn-primary" href="personal_info.html" role="button">Next</a>
                                    </div>
                                </li>
                            </ul>
                        </container>
                        <Link to="/form">To Form</Link>
                    </div>
                );
    }
}

const mapStateToProps = state => {
    return { reservedSeats: state.reservedSeats };
};


export default connect(mapStateToProps,{reserveSeat,cancelReserve})(ReservationSeats);

import React, {Component} from "react";
import { Link } from "react-router-dom";

// const ReservationSeats = () => {
//     return (
//         <div>
//             <container class="d-flex flex-column align-items-center position-relative pb-5 pt-md-4">
//                 <ul className="list-group list-group-flush width-80">
//                     <li className="list-group-item d-flex justify-content-around">
//                             <span className="badge badge-secondary">Not available</span>
//                             <span className="badge badge-success">Available</span>
//                             <span className="badge badge-danger">Your choice</span>
                    
//                     </li>
//                     <li className="list-group-item d-flex flex-column align-items-center">
//                         <div className="screen text-center"><small>SCREEN</small></div>
//                         <div className="seats-container mt-4">
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"A/1"}}>1</button>
//                             <button type="button" className="btn btn-danger btn-sm" style={{gridArea:"A/2"}}>2</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"A/10"}}>10</button>
//                             <button type="button" className="btn btn-secondary btn-sm" disabled style={{gridArea:"B/1"}}>1</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"B/2"}}>2</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"B/10"}}>10</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"J/1"}}>1</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"J/2"}}>2</button>
//                             <button type="button" className="btn btn-success btn-sm" style={{gridArea:"J/10"}}>10</button>
//                         </div>
                        
//                         <div className="d-flex justify-content-around w-100 mt-5">
//                             <a className="btn btn-warning" href="index.html" role="button">Back</a>
//                             <a className="btn btn-primary" href="personal_info.html" role="button">Next</a>
//                         </div>
//                     </li>
//                 </ul>
//             </container>
//             <Link to="/form">To Form</Link>
//         </div>
//     );
// };

class ReservationSeats extends Component {

     renderNumberOfSeat = seat => {
         console.log(seat);
        if(seat.length === 3) {
            return seat[0] + seat[2];
        }
        return seat[0] + seat[2] + seat[3];
    }

    renderSeats() {
        let seatsArr = []
        
        for(let i=65; i<74;i++) {
            for(let j=1; j<11; j++) {
                var chr = String.fromCharCode(i) + "/" + j
                seatsArr.push(chr);
            }
        }
    

        let buttons = seatsArr.map(seat =>{return <button type="button" id={seat} className="btn btn-success btn-sm" style={{gridArea:seat,fontSize:'11px'}}>{this.renderNumberOfSeat(seat)}</button>});

        return <div className="seats-container mt-4">{buttons}</div>

    }

    render() {
        return (
                    <div>
                        <container class="d-flex flex-column align-items-center position-relative pb-5 pt-4">
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
                                        <a className="btn btn-warning" href="index.html" role="button">Back</a>
                                        <a className="btn btn-primary" href="personal_info.html" role="button">Next</a>
                                    </div>
                                </li>
                            </ul>
                        </container>
                        <Link to="/form">To Form</Link>
                    </div>
                );
    }
}


export default ReservationSeats;

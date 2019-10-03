import React, {Component} from 'react';

class ProgramSettings extends Component {

    constructor() {
        super();

        this.state = {
            cinemas: []
        }
    }

    // componentWillMount(){
    //     this.renderCinemas()
    // }

    componentDidMount() {
        this.loadMovies();
    }

    async loadMovies() {
        await fetch('https://api.cinelist.co.uk/search/cinemas/location/St.%20Albans',{
            method: 'GET',
            headers: {
                'Content-Type' : "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            let cinemasFromApi = [];
            for(let i=1; i<5; i++) {
                cinemasFromApi.push(res.cinemas[i]);
            }
            this.setState({cinemas : cinemasFromApi});
        })
        

        //  console.log(this.state);
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
        if(this.state.cinemas.length == 0) {
            return null;
        }
        return this.state.cinemas.map(function(cinema){
            return <option>{cinema.name}</option>;
        })
    }

}

export default ProgramSettings;
import React from 'react';

const Prices = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <ul className="list-group list-group-flush mt-3 width-80">
                <li className="list-group-item">
                    <h1>Prices</h1>
                </li>
                <li className="list-group-item">
                    <table id="priceTable" className="table table-hover mx-auto text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Mon-Thu</th>
                                <th scope="col">Fri-Sun/ Holidays</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-left">
                                    Adult
                                </th>
                                <td>16 €</td>
                                <td>18 €</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    Child <small className="text-muted">under 6</small>
                                </th>
                                <td>12 €</td>
                                <td>14 €</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    Student <small className="text-muted">ID required</small>
                                </th>
                                <td>14 €</td>
                                <td>16 €</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    Senior
                                </th>
                                <td>12 €</td>
                                <td>14 €</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </div>
    );
};

export default Prices;

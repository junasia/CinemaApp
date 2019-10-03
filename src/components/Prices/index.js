import React from 'react';

const Prices = () => {
    return (
        <div className="d-flex flex-column align-items-center mb-4">
            <h1 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>CENNIK</h1>
            <br />
            <table style={{ textAlign: 'center' }} class="table table-hover table-dark">
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="col"></th>
                        <th scope="col">Dzień roboczy (pn-czw)</th>
                        <th scope="col">Weekend (pt-nd)/Święta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">normalny</th>
                        <td>15,00 zł</td>
                        <td>15,00 zł</td>
                    </tr>
                    <tr>
                        <th scope="row">dziecko</th>
                        <td>15,00 zł</td>
                        <td>15,00 zł</td>
                    </tr>
                    <tr>
                        <th scope="row">uczeń/student</th>
                        <td>15,00 zł</td>
                        <td>15,00 zł</td>
                    </tr>
                    <tr>
                        <th scope="row">senior</th>
                        <td>15,00 zł</td>
                        <td>15,00 zł</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Prices;

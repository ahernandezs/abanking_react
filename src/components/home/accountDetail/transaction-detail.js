import React from 'react';
import { Link } from 'react-router';

export default class TransactionDetail extends React.Component {
    render() {
        return (
            <div id="TransactionDetail" className="shadow-second">
                <div>
                    Detalle de transacción
                    <Link to="/generalDetail" activeClassName="active">
                        <span className="icon-cancel"></span>
                    </Link>
                </div>
                <div>
                    <span>Lunes 10, AGO 2016, 14:32 PM</span><br />
                    <span>Starbucks</span><br />
                    <span>$&nbsp;300.00</span>
                </div>
                <div>
                    <span>Aplicada</span>
                    <span>
                        <Link to="/transactionDetail" activeClassName="active">Solicitar aclaración</Link>
                    </span>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Cuenta retiro:</td>
                                <td>Clásica ***1581</td>
                            </tr>
                            <tr>
                                <td>Gasto:</td>
                                <td>-$&nbsp;300.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$&nbsp;300.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <span>Concepto:</span><br />
                    Café y snacks para la familia.
                </div>
            </div>
        );
    }
}

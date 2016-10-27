import React from 'react';

export default class GeneralDetail extends React.Component {
    render() {
        return (
            <div id="GeneralDetail" className="shadow-second">
                <div>Detalle de cuenta</div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Saldo:</td>
                                <td>$&nbsp;21,000.00</td>
                            </tr>
                            <tr>
                                <td>Línea de sobregiro:</td>
                                <td>$&nbsp;150.00</td>
                            </tr>
                            <tr>
                                <td>Depósitos pendientes:</td>
                                <td>$&nbsp;100.00</td>
                            </tr>
                            <tr>
                                <td>Depósitos salvo buen cobro:</td>
                                <td>$&nbsp;50.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan="2">Resumen del 10, JUN 2016 al 09, JUL 2016</th>
                            </tr>
                            <tr>
                                <td >Saldo anterior</td>
                                <td>$&nbsp;2,500.00</td>
                            </tr>
                            <tr>
                                <td>4 Depósitos</td>
                                <td>$&nbsp;56,000.00</td>
                            </tr>
                            <tr>
                                <td>2 Retiros</td>
                                <td>$&nbsp;6,501.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan="2">Resumen al 10, JUL 2016</th>
                            </tr>
                            <tr>
                                <td >Día de corte</td>
                                <td>31</td>
                            </tr>
                            <tr>
                                <td >Línea de crédito</td>
                                <td>$&nbsp;0.00</td>
                            </tr>
                            <tr>
                                <td>Saldo en línea de crédito</td>
                                <td>$&nbsp;0.00</td>
                            </tr>
                            <tr>
                                <td>Línea de crédito disponible</td>
                                <td>$&nbsp;0.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

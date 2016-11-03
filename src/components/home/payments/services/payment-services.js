import 'rc-collapse/assets/index.css';
import '../../../../hover.css';
import React from 'react';
import { Link } from 'react-router';

import Collapse, { Panel } from 'rc-collapse';

const payment = React.createClass({

    getInitialState() {
        return {
            activeKey: ['0']
        };
    },
    onChange(activeKey) {
        this.setState({
            activeKey
        });
    },
    setActivityKey() {
        this.setState({
            activeKey: ['0'],
        });
    },
    render() {
        const activeKey = this.state.activeKey;
        return (
            <div id="PaymentService">
                <div className="generalTitle">
                    <p>
                        Pago de servicios<br />
                        <small>Realiza el pago de servicios, como: luz, agua, internet, entre otros.</small>
                    </p>
                </div>
                <div className="hidden-sm-down">
                    <div className="menu">
                        <Link to="/NewPayment" activeClassName="active">Nuevo pago</Link>
                        <Link to="/NewPayment" activeClassName="active">Pagos anteriores</Link>
                        <Link to="/NewPayment" activeClassName="active">Pagos programados</Link>
                        <Link to="/NewPayment" activeClassName="active">Servicios</Link>
                    </div>
                </div>
                <div className="hidden-md-up">
                    <Collapse accordion onChange={this.onChange} activeKey={activeKey}>
                        <Panel header="Opciones de pago" key="1">
                            <Link to="/NewPayment" activeClassName="active" onClick={this.setActivityKey}>Nuevo pago</Link>
                            <Link to="/NewPayment" activeClassName="active" onClick={this.setActivityKey}>Pagos anteriores</Link>
                            <Link to="/NewPayment" activeClassName="active" onClick={this.setActivityKey}>Pagos programados</Link>
                            <Link to="/NewPayment" activeClassName="active" onClick={this.setActivityKey}>Servicios</Link>
                        </Panel>
                    </Collapse>
                </div>
                <div className="cont-payment shadow-tertiary">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default payment;

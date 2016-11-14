import 'rc-collapse/assets/index.css';
import '../../../hover.css';
import React from 'react';
import { Link } from 'react-router';

import Collapse, { Panel } from 'rc-collapse';

const Transfer = React.createClass({

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
            <div id="transfers" className="PayTrans">
                <div className="generalTitle">
                    <p>
                        Transferencia entre mis cuentas<br />
                        <small>Realiza transferencias entre cuentas abanking.</small>
                    </p>
                </div>
                <div className="hidden-sm-down">
                    <div className="menu">
                        <Link to="/newTransfer" activeClassName="active">Nueva transferencia</Link>
                        <Link to="/previousTrans" activeClassName="active">Transferencias anteriores</Link>
                        <Link to="/scheduledTransfer" activeClassName="active">Transferencias programadas</Link>
                    </div>
                </div>
                <div className="hidden-md-up">
                    <Collapse accordion onChange={this.onChange} activeKey={activeKey}>
                        <Panel header="Opciones de pago" key="1">
                            <Link to="/newTransfer" activeClassName="active" onClick={this.setActivityKey}>Nueva transferencia</Link>
                            <Link to="/previousTrans" activeClassName="active" onClick={this.setActivityKey}>Transferencias anteriores</Link>
                            <Link to="/scheduledTransfer" activeClassName="active" onClick={this.setActivityKey}>Transferencias programadas</Link>
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

export default Transfer;

import React, { Component } from 'react';

class Balance extends Component {
  render() {
    return (
        <div id="balance">
            <button className="btn btn-collapse" type="button" data-toggle="collapse" data-target="#minutes" aria-expanded="true" aria-controls="minutes">
                <span className="icon-triangle-down"></span>&nbsp;&nbsp;Saldo neto y tiempo aire
            </button>
            <div id="minutes" className="collapse in">
                <div className="card">
                    <div className="container">
                        <p>Saldo neto</p>
                        <p>Deuda neta</p>
                        <p>Tiempo aire</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Balance;

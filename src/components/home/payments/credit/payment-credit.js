import React from 'react';

export default class PaymentCredit extends React.Component {
    render() {
        return (
            <div id="PaymentCredit">
                {this.props.children}
            </div>
        );
    }
}

import React, { Component } from 'react';
import SlideAccount from './slide.js';
import Balance from './cellphone-minutes-balance.js'

class Accounts extends Component {
  render() {
    return (
        <div>
            <SlideAccount></SlideAccount>
            <Balance></Balance>
        </div>
    );
  }
}

export default Accounts;

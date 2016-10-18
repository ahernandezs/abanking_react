import React, { Component } from 'react';
import SlideAccount from './slide.js';
import Balance from './cellphone-minutes-balance.js';
import Publicitybar from './publicitybar.js';

class Accounts extends Component {
  render() {
    return (
        <div>
            <SlideAccount></SlideAccount>
            <Balance></Balance>
            <Publicitybar></Publicitybar>
        </div>
    );
  }
}

export default Accounts;

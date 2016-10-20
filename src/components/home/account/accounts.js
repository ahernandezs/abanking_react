import React from 'react';
import SlideAccount from './slide.js';
import Balance from './cellphone-minutes-balance.js';
import Publicitybar from './publicitybar.js';

export default class Accounts extends React.Component {
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

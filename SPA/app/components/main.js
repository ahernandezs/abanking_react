import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';


//Login
import Prelogin from './login/Prelogin.jsx';
import Login from './login/Login.jsx';
import Changepass from './login/Changepass.jsx';
import Unblock from './login/Unblock.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Prelogin} />
		<Route path="/login" component={Login} />		
		<Route path="changepass" component={Changepass} />
		<Route path="/unblock" component={Unblock} />
	</Router>
	,document.getElementById('app')
);
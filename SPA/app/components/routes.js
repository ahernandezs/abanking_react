import React from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

//share
import LayoutLogin from './share/layout-login.jsx';
import LayoutHome from './share/layout-home.jsx';

//login
import Prelogin from './login/Prelogin.jsx';
import Login from './login/Login.jsx';
import Changepass from './login/Changepass.jsx';
import Unblock from './login/Unblock.jsx';

//home
import Accounts from './home/accounts.jsx';

export default (
	<Router history={hashHistory}>
		<Route component={LayoutLogin}>
			<Route path="/" component={Prelogin} />
			<Route path="/login" component={Login} />
			<Route path="/changepass" component={Changepass} />
			<Route path="/unblock" component={Unblock} />
		</Route>
		<Route component={LayoutHome}>
			<Route path="/accounts" component={Accounts} />
		</Route>
	</Router>
);

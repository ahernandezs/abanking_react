import React from 'react';
import Route from 'react-route';

//Layouts
import Header from './layout/Header.jsx';
import Body from './layout/Body.jsx';
import Footer from './layout/Footer.jsx';

//Login
import Prelogin from './login/Prelogin.jsx';
import Login from './login/Login.jsx';
import Changepass from './login/Changepass.jsx';
import Unblock from './login/Unblock.jsx';

var routes=(
		<Route name='prelogin' path='/' handler={Prelogin}>
			<Route name='login' path='/login' handler={Login} />
			<Route name='unblock' path='/unblock' handler={Unblock}>
				<Route name='changepass' path='/changepass' handler={Changepass} />
			</Route>
		</Route>
);

export default routes;
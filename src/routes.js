import React from 'react';
import {Router, Route, hashHistory } from 'react-router';

//share
import LayoutLogin from './components/share/layout-login.js';
import LayoutHome from './components/share/layout-home.js';

//login
import Prelogin from './components/login/prelogin.js';
import Login from './components/login/login.js';
import Unblock from './components/login/unblock.js';
import Changepass from './components/login/changepass.js';

//home
import Accounts from './components/home/account/accounts.js';
import TableDetail from './components/home/accountDetail/table-detail.js';
import GeneralDetail from './components/home/accountDetail/general-detail.js';
import TransactionDetail from './components/home/accountDetail/transaction-detail.js';

//Payments-services
import PaymentServices2 from './components/home/payments/services/payment-services.js';
import NewPayment from './components/home/payments/services/new-payment.js';
import NewPaymentConfirmation from './components/home/payments/services/new-payment-confirm.js';
import PreviousPay from './components/home/payments/services/previous-payments.js';
import ScheduledPay from './components/home/payments/services/scheduledpay.js';
import Services from './components/home/payments/services/services.js';
import ServicesStep1 from './components/home/payments/services/services-step1.js';
import ServicesStep2 from './components/home/payments/services/services-step2.js';
import ServicestoAdd from './components/home/payments/services/servicestoadd.js';
//Payments-credit
import PaymentCredit from './components/home/payments/credit/payment-credit.js';
import NewPaymentc from './components/home/payments/credit/new-paymentc.js';

export default (
	<Router history={hashHistory}>
		<Route component={LayoutLogin}>
			<Route path="/" component={Prelogin} />
			<Route path="/login" component={Login} />
			<Route path="/unblock" component={Unblock} />
			<Route path="/changepass" component={Changepass} />
		</Route>
		<Route component={LayoutHome}>
			<Route path="/accounts" component={Accounts} />
			<Route component={TableDetail}>
				<Route path="/generalDetail" component={GeneralDetail} />
				<Route path="/transactionDetail" component={TransactionDetail} />
			</Route>
			<Route component={PaymentServices2}>
				<Route path="/newPayment" component={NewPayment} />
				<Route path="/newConfirm" component={NewPaymentConfirmation}/>
				<Route path="/previousPayment" component={PreviousPay} />
				<Route path="/scheduledPay" component={ScheduledPay} />
				<Route path="/services" component={Services} />
				<Route path="/servicesstep1" component={ServicesStep1} />
				<Route path="/servicesstep2" component={ServicesStep2} />
				<Route path="/servicestoadd" component={ServicestoAdd} />
			</Route>
			<Route component={PaymentCredit}>
				<Route path="/newCreditPayment" component={NewPaymentc} />
			</Route>
		</Route>
	</Router>
);

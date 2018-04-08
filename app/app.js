
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './dev/components/navbar.jsx';
import RubricList from './dev/components/faq/rubric-list.jsx';
import RubricDetail from './dev/components/faq/rubric-detail.jsx';
import InstallFaq from './dev/components/faq/install-faq.jsx';
import Dashboard from './dev/components/faq/dashboard.jsx';


const App = () => (
	<Router>
		<div className="container">			
			<Navbar/>			
			<hr/>
			<Route exact path="/(faq|)/" component={RubricList} />
				<Route exact path="/faq/:rubricSlug" component={RubricDetail} />
			<Route path="/script" component={InstallFaq} />
			<Route path="/dashboard" component={Dashboard} />
		</div>
	</Router>
);




export default App;
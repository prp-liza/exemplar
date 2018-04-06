
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Nav from './dev/components/nav.jsx';
import RubricList from './dev/components/faq/rubric-list.jsx';
import InstallFaq from './dev/components/faq/install-faq.jsx';
import Dashboard from './dev/components/faq/dashboard.jsx';


const App = () => (
	<Router>
		<div>			
			<Nav/>			
			<hr/>
			<Route exact path="/" component={RubricList} />
			<Route exact path="/script" component={InstallFaq} />
			<Route exact path="/dashboard" component={Dashboard} />
		</div>

	</Router>

);

export default App;
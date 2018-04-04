import React from 'react';
import FaqList from './dev/components/faq/faq-list.jsx';
import FaqDetail from './dev/components/faq/faq-detail.jsx';
import FaqAddItem from './dev/components/faq/faq-add-item.jsx';


const App = () => (
	<div>
		<FaqAddItem/>
		<FaqList/>
		<hr/>
		<h2>Question Details : </h2>
		<FaqDetail/>
		
	</div>
);

export default App;
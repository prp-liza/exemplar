import React from 'react';
import FaqList from './dev/components/faq/faq-list.jsx';
import FaqDetail from './dev/components/faq/faq-detail.jsx';
import FaqAddItem from './dev/components/faq/faq-add-item.jsx';


const App = () => (
	<div>
		<FaqAddItem/>
		<FaqList/>
		<hr/>
<<<<<<< HEAD
		<h2>Question Detail : </h2>
=======
		<h2>Question Details : </h2>
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d
		<FaqDetail/>
		
	</div>
);

export default App;
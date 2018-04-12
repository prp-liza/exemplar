import 
{ 
	FETCH_RUBRICS, 
	NEW_RUBRIC, 
	DELETE_RUBRIC,
	UPDATE_RUBRIC 
} from './types.js';


export const fetchRubrics = () => dispatch => {
	fetch('http://localhost:3000/faqs')
		.then(res => res.json()) 						
		.then(rubrics =>
			//console.log(rubrics) 		 						
			dispatch({
				type: FETCH_RUBRICS,
    			payload: rubrics
			})
		);
};


export const createRubric = (rubricData) => dispatch => {
	// console.log(rubricData);
	fetch('http://localhost:3000/faqs', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(rubricData)
	})
		.then(res => res.json()) 						
		.then(rubric => 
			//console.log(rubric)		 						
			dispatch({
				type: NEW_RUBRIC,
    			payload: rubric
			})
		);

};

export const deleteRubric = (rubricId) => dispatch => {
	fetch(`http://localhost:3000/faqs/${rubricId}`)
		.then(res => res.json()) 						
		.then(rubric => 
			// console.log(rubric.id, "deleted by action")		 						
			dispatch({
				type: DELETE_RUBRIC,
    			payload: rubric
			})
		);
	
};

export const updateRubric = (rubricId) => dispatch => {
	
};
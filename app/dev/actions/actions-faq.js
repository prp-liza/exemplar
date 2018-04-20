import 
{ 
	FETCH_RUBRICS, 
	NEW_RUBRIC, 
	DELETE_RUBRIC,
	UPDATE_RUBRIC, 
	SELECT_RUBRIC,
	NEW_RUBRIC_CONTENT 
} from './types.js';



export const fetchRubrics = () => dispatch => {
	fetch('/api/faqs')
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
	fetch('/api/faqs', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(rubricData)
	})
		.then(res => res.json()) 						
		.then(newRubric => 
			//console.log(newRubric)		 						
			dispatch({
				type: NEW_RUBRIC,
    			payload: newRubric
			})
		);

};


export const deleteRubric = (id) => dispatch => {
	fetch(`/api/faqs/${id}`, {
		method: 'DELETE'
	})
	.then(res => res.json()) 						
	.then(rubric => 
		//console.log(rubric, "deleted by action")		 						
		dispatch({
			type: DELETE_RUBRIC,
			payload: rubric
		})
	);
	
};


export const updateRubric = (rubricId) => dispatch => {
	
};

export const selectRubric = (rubricSelected) => dispatch => {
	//console.log(rubricSelected); 						
	dispatch({
		type: SELECT_RUBRIC,
		payload: rubricSelected
	})
};


export const createRubricContent = (rubricContent, newContent) => dispatch => {
  	dispatch ({
	    type: NEW_RUBRIC_CONTENT,
	    payload: {
	    	...rubricContent, content: [...rubricContent.content, newContent]} 
  	})
};

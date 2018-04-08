// take all reducers and combine them to 1 object

import {combineReducers} from 'redux';
import RubricReducer from './faq/reducer-rubrics';
// import RubricReducerActive from './faq/reducer-rubric-active';


const allReducers = combineReducers({
	rubrics: RubricReducer,
	// rubricActive: RubricReducerActive
});

export default allReducers;
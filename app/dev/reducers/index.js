// take all reducers and combine them to 1 object

import {combineReducers} from 'redux';
import RubricReducer from './faq/reducer-rubrics';


const allReducers = combineReducers({
	rubrics: RubricReducer,
});

export default allReducers;
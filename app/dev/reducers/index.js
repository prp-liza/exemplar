// take all reducers and combine them to 1 object

import {combineReducers} from 'redux';
import FaqReducer from './faq/reducer-faqs';
import FaqReducerActive from './faq/reducer-faq-active';


const allReducers = combineReducers({
	faqs: FaqReducer,
	faqActive: FaqReducerActive
});

export default allReducers;
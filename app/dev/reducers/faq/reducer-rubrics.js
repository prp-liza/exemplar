import {FETCH_RUBRICS, NEW_RUBRIC, DELETE_RUBRIC} from '../../actions/types.js';

const initialState = {
    rubricItems: [],
    rubricItem: {}
}


export default function(state= initialState, action) {

    switch (action.type) {

        case FETCH_RUBRICS:
            return {
                ...state,
                rubricItems: action.payload
            };

        case NEW_RUBRIC:
            return {
                ...state,
                rubricItem: action.payload,
                rubricItems:[...state.rubricItems, action.payload]
            }; 
        
        case DELETE_RUBRIC:
            //console.log(action.payload.id);
            return {
                ...state,
                // return all the rubrics not matching the action.id
                rubricItems: state.rubricItems.filter(rubric => rubric.id !== action.payload.id)

            };
        
        default:
          return state;
    }
}


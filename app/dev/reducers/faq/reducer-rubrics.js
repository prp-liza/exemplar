import 
{
    FETCH_RUBRICS, 
    NEW_RUBRIC, 
    DELETE_RUBRIC, 
    SELECT_RUBRIC,
    NEW_RUBRIC_CONTENT
} from '../../actions/types.js';

const initialState = {
    rubricItems: [],
    rubricNew: {},
    rubricSelected: []
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
                rubricNew: action.payload,
                rubricItems:[...state.rubricItems, action.payload]
            }; 
        
        case DELETE_RUBRIC:
            //console.log(action.payload._id);
            return {
                ...state,
                // return all the rubrics not matching the action.id
                rubricItems: state.rubricItems.filter(rubric => rubric._id !== action.payload._id)

            };

        case SELECT_RUBRIC:
            return {
                ...state,
                rubricSelected: action.payload
            };

        case NEW_RUBRIC_CONTENT:
            //console.log(action.payload);
            return {
                ...state,
                rubricSelected: action.payload
            };
  


        
        default:
          return state;
    }
}


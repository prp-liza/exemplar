import {FETCH_RUBRICS, NEW_RUBRIC} from '../../actions/types.js';

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
                rubricItem: action.payload
            };              

        default:
          return state;
    }
}


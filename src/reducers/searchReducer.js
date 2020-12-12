import { CHANGE_SEARCH_FIELD } from '../actions/actionTypes';

const initialState = {
  search:'',
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, search: action.payload.search.toLowerCase() };
    default:
      return state;
  }
};

import {
    SET_CURRENT_PAGE, FETCH_DATA_SUCCESS, SORT_DATA,
} from '../actions/actionTypes';

const initialState = {
    currentPage:0,
    onPage:[],
};
export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      const { n, onPage } = action.payload;
      return { ...state, currentPage:n, onPage };
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return { ...state, onPage:data.slice(0, 49) };
    case SORT_DATA:
      const { sorted } = action.payload;
      return { ...state, onPage:sorted.slice(50 * state.currentPage, 50 * (state.currentPage + 1) - 1) };
    default:
      return state;
    }
}

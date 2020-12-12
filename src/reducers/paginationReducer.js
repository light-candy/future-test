import {
    SET_CURRENT_PAGE, FETCH_DATA_SUCCESS, SORT_DATA, ADD_ITEM, START_SEARCH
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
      return { ...state, onPage:data.slice(0, 50) };
    case SORT_DATA:
      const { sorted } = action.payload;
      return { ...state, onPage:sorted.slice(50 * state.currentPage, 50 * (state.currentPage + 1)) };
    case ADD_ITEM:
    const { item } = action.payload;
    return { ...state, onPage: [item, ...state.onPage]};
    case START_SEARCH:
      const { filtered } = action.payload;
          return { ...state, currentPage:0, onPage:filtered.slice(0, 50) };
    default:
      return state;
    }
}

import {
  OPEN_ADD_FORM,
  CHANGE_INPUT_FIELD,
  ADD_ITEM
} from '../actions/actionTypes';

const initialState = {
  formOpen: false,
  item: {},
};

export default function addItemReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD_FORM:
      return { ...state, formOpen: true };
    case CHANGE_INPUT_FIELD:
      const { name, value } = action.payload;
      return { ...state, item: { ...state.item, [name]: value } };
    case ADD_ITEM:
          return { ...state, item:{}, formOpen:false };
    default:
          return state;
    }
};

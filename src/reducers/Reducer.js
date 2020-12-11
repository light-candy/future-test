import {
  SELECT_DATASET,
  SUBMIT_SELECT_DATASET,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SELECT_ITEM,
  OPEN_ADD_FORM,
  CHANGE_INPUT_FIELD,
  ADD_ITEM,
  CHANGE_SEARCH_FIELD,
  START_SEARCH,
  SORT_DATA
} from '../actions/actionTypes';

const initialState = {
    dataset: '',
    data: [],
    dataLoading: false,
    dataError: null,
    selectedId: 0,
    details: {},
    formOpen: false,
    item: {},
    search:'',
    order:'asc'
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DATASET:
      const { dataset } = action.payload;
      return { ...state, dataset };
    case SUBMIT_SELECT_DATASET:
      const { selectedDataset } = action.payload;
      return { ...state, selectedDataset };
    case FETCH_DATA_REQUEST:
      return { ...state, dataError: null };
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return { ...state, data, dataError: null };
    case FETCH_DATA_FAILURE:
      return { ...state, dataError: action.payload.error };
    case SELECT_ITEM:
      const { selectedId } = action.payload;
      const details = { ...state.data.find((o) => (o.id === selectedId)) };
      return { ...state, selectedId, details };
    case OPEN_ADD_FORM:
      return { ...state, formOpen: true };
    case CHANGE_INPUT_FIELD:
      const { newitem } = action.payload;
      return { ...state, item: newitem };
    case ADD_ITEM:
      const { item } = action.payload;
      const appended = [ item, ...state.data];
      return {
        ...state,
        data: appended,
        filtered: appended.filter((o) =>
          (o.id.toString().includes(state.search) ||
          o.firstName.toLowerCase().includes(state.search) ||
          o.lastName.toLowerCase().includes(state.search) ||
          o.phone.includes(state.search) ||
          o.email.toLowerCase().includes(state.search)))
      };
    case CHANGE_SEARCH_FIELD:
      return { ...state, search: action.payload.search };
    case START_SEARCH:
      const { search } = action.payload;
      if (search === "") {
        return {
          ...state,
          search: search,
          filtered:[ ...state.data]
        };
      } else {
        const LCSearch = search.toLowerCase();
        return {
          ...state,
          search: LCSearch,
          filtered: [ ...state.data.filter((o) =>
              (o.id.toString().includes(LCSearch) ||
               o.firstName.toLowerCase().includes(LCSearch) ||
               o.lastName.toLowerCase().includes(LCSearch) ||
               o.phone.includes(LCSearch) ||
               o.email.toLowerCase().includes(LCSearch)))
          ]
        }
      }
    default:
      return state;
  }
};

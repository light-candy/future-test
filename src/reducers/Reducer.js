import {
  SELECT_DATASET,
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
import { nanoid } from 'nanoid';

const initialState = {
    dataset: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    data: [],
    dataLoading: false,
    dataError: null,
    selectedId: '',
    details: {},
    formOpen: false,
    item: {},
    search:''
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DATASET:
      const { dataset } = action.payload;
      return { ...state, dataset, selectedId:'' };
    case FETCH_DATA_REQUEST:
      return { ...state, dataError: null, dataLoading:true };
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return { ...state, data, dataError: null, dataLoading:false };
    case FETCH_DATA_FAILURE:
      return { ...state, dataError: action.payload.error, dataLoading:false };
    case SELECT_ITEM:
      const { selectedId } = action.payload;
      const details = { ...state.data.find((o) => (o.nanoId === selectedId)) };
      return { ...state, selectedId, details };
    case OPEN_ADD_FORM:
      return { ...state, formOpen: true };
    case CHANGE_INPUT_FIELD:
      const { name, value } = action.payload;
      return { ...state, item: { ...state.item, [name]: value } };
    case ADD_ITEM:
      const { item } = action.payload;
      const initItem = { ...item, id:parseInt(item.id), nanoId:nanoid() };
      const appended = [initItem, ...state.data];
      return {
        ...state,
        item:{},
        formOpen:false,
        data: appended,
        filtered: appended.filter((o) =>
          (o.id.toString().includes(state.search) ||
          o.firstName.toLowerCase().includes(state.search) ||
          o.lastName.toLowerCase().includes(state.search) ||
          o.phone.includes(state.search) ||
          o.email.toLowerCase().includes(state.search)))
      };
    case SORT_DATA:
      const { column, order } = action.payload;
      const compareFunc = (a, b) => {
        if (order === 'asc') {
          return ((a[column] < b[column]) - (a[column] > b[column]));
        } else {
          return ((a[column] > b[column]) - (a[column] < b[column]));
        }
      };
      return {
        ...state,
        data: state.data.sort(compareFunc),
        filtered: (state.filtered) ? state.filtered.sort(compareFunc) : state.data.sort(compareFunc)}
                        
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

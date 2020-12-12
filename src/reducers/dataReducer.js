import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SORT_DATA,
  ADD_ITEM,
  SELECT_ITEM,
  SELECT_DATASET,
  START_SEARCH
} from '../actions/actionTypes';
import { nanoid } from 'nanoid';

const initialState = {
  data: [],
  dataLoading: false,
  dataError: null,
  selectedId:'',
  details: {}
};
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
     case FETCH_DATA_REQUEST:
            return { ...state, dataError: null, dataLoading:true, data:[] };
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload;
      return { ...state, data, dataError: null, dataLoading:false };
    case FETCH_DATA_FAILURE:
      return { ...state, dataError: action.payload.error, dataLoading:false };
    case ADD_ITEM:
      const { item } = action.payload;
      return {
        ...state,
          data: [item, ...state.data],
          filtered: (state.filtered) ? [item, ...state.filtered] : null
      };
     case SORT_DATA:
       const { sorted } = action.payload;
       return {
          ...state,
          filtered: sorted
        };
    case SELECT_ITEM:
      const { selectedId } = action.payload;
      const details = { ...state.data.find((o) => (o.nanoId === selectedId)) };
      return { ...state, selectedId, details };
    case SELECT_DATASET:
            return { ...state, selectedId:'', details:{}, filtered:null };
    case START_SEARCH:
      const { filtered } = action.payload;
        return {
          ...state,
          filtered: filtered
        };
    default:
      return state;
    }
};

import { createStore, combineReducers } from 'redux';
import dataReducer from '../reducers/dataReducer';
import paginationReducer from '../reducers/paginationReducer';
import addItemReducer from '../reducers/addItemReducer';
import datasetReducer from '../reducers/datasetReducer';
import searchReducer from '../reducers/searchReducer';

const reducer = combineReducers({
  dataRed: dataReducer,
  paginationRed: paginationReducer,
  addItemRed: addItemReducer,
  datasetRed: datasetReducer,
  searchRed: searchReducer
});

const store = createStore(reducer);

export default store;

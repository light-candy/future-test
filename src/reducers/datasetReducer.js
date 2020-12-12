import { SELECT_DATASET } from '../actions/actionTypes';

const initialState = {
  dataset: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
}

export default function datasetReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DATASET:
      const { dataset } = action.payload;
      return { ...state, dataset};
    default:
      return state;
  }
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataset, submitSelectDataset } from './actions/actionCreators';

export function ChooseDataset() {
  const dispatch = useDispatch();
  const { dataset } = useSelector(state => state);
  const handleChange = (event) => {
    dispatch(selectDataset(event.target.value));
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(submitSelectDataset(dataset));
  }
  return(
    <form onSubmit={handleSubmit}>
    <input type="radio" id="smallDataset"
     name="dataset" value="small" onChange={handleChange} />
    <label htmlFor="smallDataset">Small</label>

    <input type="radio" id="largeDataset"
     name="dataset" value="large" onChange={handleChange} />
    <label htmlFor="largeDataset">Large</label>
    <input type="submit" value="Load data!" />
    </form>
  );
}

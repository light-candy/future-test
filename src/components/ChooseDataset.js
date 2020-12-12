import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataset } from '../actions/actionCreators';

export function ChooseDataset() {
  const dispatch = useDispatch();
  const { dataset } = useSelector(state => state.datasetRed);

  const handleChange = (event) => {
    dispatch(selectDataset(event.target.value));
  }
 
  return(
    <form className="choose-dataset">
      <div>
        <input
          type="radio"
          id="smallDataset"
          name="dataset"
          value="http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
          onChange={handleChange}
          checked={(dataset === "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")}
        />
        <label htmlFor="smallDataset">Маленький</label>
      </div>
      <div>
        <input
          type="radio"
          id="largeDataset"
          name="dataset"
          value="http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
          onChange={handleChange}
        />
        <label htmlFor="largeDataset">Большой</label>
      </div>
    </form>
  );
}

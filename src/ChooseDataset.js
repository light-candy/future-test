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
    <form onSubmit={handleSubmit} className="choose-dataset">
    <div className="choose-dataset__inputs">
    <div>
    <input type="radio" id="smallDataset"
     name="dataset" value="small" onChange={handleChange} />
    <label htmlFor="smallDataset">Маленький</label>
    </div>
    <div>
    <input type="radio" id="largeDataset"
     name="dataset" value="large" onChange={handleChange} />
    <label htmlFor="largeDataset">Большой</label>
    </div>
    </div>
    <input type="submit" value="Загрузить данные!" className="choose-dataset__button" />
    </form>
  );
}

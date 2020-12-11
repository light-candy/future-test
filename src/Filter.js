import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeSearchField,
  startSearch
} from './actions/actionCreators';

export function Filter() {
  const dispatch = useDispatch();
  const {
    search,
  } = useSelector(state => state);
  const handleChange = (event) => {
    dispatch(changeSearchField(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startSearch(search));
    dispatch(changeSearchField(''));
  }
  return(
    <form onSubmit={handleSubmit} className="filter">
     <input type="text" value={search} onChange={handleChange} className="filter__input"/>
      <input type="submit" value="Найти" className="filter__button"/>
    </form>
  );
}

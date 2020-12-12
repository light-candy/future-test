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
  } = useSelector(state => state.searchRed);
  const { data } = useSelector(state => state.dataRed)
  const handleChange = (event) => {
    dispatch(changeSearchField(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = data.filter((o) =>
              (o.id.toString().includes(search) ||
               o.firstName.toLowerCase().includes(search) ||
               o.lastName.toLowerCase().includes(search) ||
               o.phone.includes(search) ||
               o.email.toLowerCase().includes(search)));
    dispatch(startSearch(search, filtered));
    dispatch(changeSearchField(''));
  }
  return(
    <form onSubmit={handleSubmit} className="filter">
     <input type="text" value={search} onChange={handleChange} className="filter__input"/>
      <input type="submit" value="Найти" className="filter__button"/>
    </form>
  );
}

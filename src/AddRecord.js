import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  openAddForm,
  changeInputField,
  addItem
} from './actions/actionCreators';

export function AddRecord() {
  const dispatch = useDispatch();
  const { item, formOpen } = useSelector(state => state);
  const openForm = () => {
    dispatch(openAddForm());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem(item));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeInputField(name, value));
  };
   
  return(
      <>
     {(formOpen) ?
    <form onSubmit={handleSubmit} className="add-record">
    <div className="add-record__group">
      <label htmlFor="id" className="add-record__label">id</label>
      <input
        type="text"
        name="id"
        id="id"
        value={item.id}
        onChange={handleChange}
        className="add-record__input"
      />
      </div>
      <div className="add-record__group">
        <label htmlFor="firstName" className="add-record__label">firstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={item.firstName}
          onChange={handleChange}
          className="add-record__input"
        />
      </div>
      <div className="add-record__group">
        <label htmlFor="lastName" className="add-record__label">lastName</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={item.lastName}
          onChange={handleChange}
          className="add-record__input"
        />
      </div>
      <div className="add-record__group">
        <label htmlFor="email" className="add-record__label">email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={item.email}
          onChange={handleChange}
          className="add-record__input"
        />
      </div>
      <div className="add-record__group">
        <label htmlFor="phone" className="add-record__label">phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={item.phone}
          onChange={handleChange}
          className="add-record__input"
        />
      </div>
      <input type="submit" value="Добавить в таблицу" className="add-record__button" />
      </form> : <button onClick={openForm} className="add-record__button">Добавить</button>}
      </>
  );
}

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
  const handleChange = () => {
    dispatch(changeInputField('a', 'a', 'a', 'a', 'a'));
  };
   
  return(
      <>
     {(formOpen) ?
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">id</label>
      <input type="text" name="id" id="id" value={item.id} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="firstName">firstName</label>
      <input type="text" name="firstName" id="firstName" value={item.firstName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lastName">lastName</label>
      <input type="text" name="lastName" id="lastName" value={item.lastName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">email</label>
      <input type="text" name="email" id="email" value={item.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
      <input type="text" name="phone" id="phone" value={item.phone} onChange={handleChange}/>
      </div>
      <input type="submit" value="Добавить в таблицу" />
      </form> : <button onClick={openForm}>Добавить</button>}
      </>
  );
}

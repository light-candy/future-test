import React from 'react';
import { useSelector } from 'react-redux';

export function Details(){
  const { details, selectedId } = useSelector(state => state);
  return(
    <>
      {(selectedId) ?
      <div className="details">
        <p>Выбран пользователь <b>{details.firstName} {details.lastName}</b></p>
        <p>Описание:</p>
        <textarea>
          {details.description}
        </textarea>
        <p>Адрес проживания: <b>{details.address.streetAddress}</b></p>
        <p>Город: <b>{details.address.city}</b></p>
        <p>Провинция/штат: <b>{details.address.state}</b></p>
        <p>Индекс: <b>{details.address.zip}</b></p>
      </div> : null}
    </>
  );
}

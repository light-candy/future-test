import React from 'react';
import { useSelector } from 'react-redux';

export function Details(){
  const { details, selectedId } = useSelector(state => state);
  return(
    <>
      {(selectedId) ?
      <div className="details">
        <div>
        <p className="details__item">Выбран пользователь <b>{details.firstName} {details.lastName}</b></p>
        <p className="details__item">Описание:</p>
        <textarea rows='5' cols='20' className="details__textarea">
          {details.description}
        </textarea>
       </div>
        <div>
        <p className="details__item">Адрес проживания: <b>{details.address.streetAddress}</b></p>
        <p className="details__item">Город: <b>{details.address.city}</b></p>
        <p className="details__item">Провинция/штат: <b>{details.address.state}</b></p>
        <p className="details__item">Индекс: <b>{details.address.zip}</b></p>
       </div>
       </div> : null}
    </>
  );
}

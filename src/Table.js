import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectItem
} from './actions/actionCreators';
import { Loader } from './Loader';

export function Table(){
  const dispatch = useDispatch();
  const { data, filtered, dataLoading } = useSelector(state => state);

  const handleClick = (id) => {
   dispatch(selectItem(id));
  };
  const items = () => {
    if (!filtered) {
      return data;
    } else {
      return filtered;
    }
  };

  return(
    <>
      {(dataLoading) ? <Loader /> : <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {items().map((o) => <tr key={o.id} onClick={() => handleClick(o.id)}>
            <td>{o.id}</td>
            <td>{o.firstName}</td>
            <td>{o.lastName}</td>
            <td>{o.email}</td>
            <td>{o.phone}</td>
          </tr>
          )}
        </tbody>
      </table>}
    </>
  );
}

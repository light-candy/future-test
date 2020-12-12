import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem, sortData, setCurrentPage } from './actions/actionCreators';
import { Loader } from './Loader';

export function Table(){
  const dispatch = useDispatch();
  const { data, filtered, dataLoading, selectedId } = useSelector(state => state.dataRed);
  const { onPage, currentPage } = useSelector(state => state.paginationRed);
  const [idOrder, setIdOrder] = useState('');
  const [firstNameOrder, setFirstNameOrder] = useState('');
  const [lastNameOrder, setLastNameOrder] = useState('');
  const [emailOrder, setEmailOrder] = useState('');
  const [phoneOrder, setPhoneOrder] = useState('');

  const handleClick = (id) => {
   dispatch(selectItem(id));
  };

  const switchOrder = (order, setOrder) => {
  if (order === 'asc') {
    setOrder('desc');
  } else {
    setOrder('asc');
  }
};



  const handleSort = (column, order, setOrder) => {
     const compareFunc = (a, b) => {
          if (order === 'asc') {
            return ((a[column] < b[column]) - (a[column] > b[column]));
          } else {
            return ((a[column] > b[column]) - (a[column] < b[column]));
          }
        };
    const sorted = (filtered) ? filtered.sort(compareFunc) : data.sort(compareFunc);
    dispatch(sortData(sorted));
    switchOrder(order, setOrder);
  };
 
//const items = () => {
//  if (!onPage.length) {
//    return data;
//  } else {
//   return onPage;
//  }
// };



  return(
    <>
      {(dataLoading) ? <Loader /> : <div className="table-wrapper">
       <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id', idOrder, setIdOrder)}>id
              <span class="material-icons">
                {(idOrder === 'asc') ? 'expand_less' : 'expand_more'}
              </span>
            </th>
            <th onClick={() => handleSort('firstName', firstNameOrder, setFirstNameOrder)}>firstName
               <span class="material-icons">
                {(firstNameOrder === 'asc') ? 'expand_less' : 'expand_more'}
              </span>
            </th>
            <th onClick={() => handleSort('lastName', lastNameOrder, setLastNameOrder)}>lastName
               <span class="material-icons">
                {(lastNameOrder === 'asc') ? 'expand_less' : 'expand_more'}
              </span>
            </th>
            <th onClick={() => handleSort('email', emailOrder, setEmailOrder)}>email
               <span class="material-icons">
                {(emailOrder === 'asc') ? 'expand_less' : 'expand_more'}
              </span>
            </th>
            <th onClick={() => handleSort('phone', phoneOrder, setPhoneOrder)}>phone
               <span class="material-icons">
                {(phoneOrder === 'asc') ? 'expand_less' : 'expand_more'}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {onPage.map((o) => <tr
            key={o.nanoId}
            onClick={() => handleClick(o.nanoId)}
            className={(selectedId === o.nanoId) ? "table__row_active" : "table__row"}
          >
            <td>{o.id}</td>
            <td>{o.firstName}</td>
            <td>{o.lastName}</td>
            <td>{o.email}</td>
            <td>{o.phone}</td>
          </tr>
          )}
        </tbody>
      </table>
      </div>}
    </>
  );
}

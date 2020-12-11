import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure
} from './actions/actionCreators';
import { Table } from './Table';
import { ErrorAlert } from './ErrorAlert';

export function Data(props){
 const dispatch = useDispatch();
 const {
   data,
   dataError,
   dataLoading
 } = useSelector(state => state);

 useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataRequest());
        const response = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const fetchedData = await response.json();
        console.log(fetchedData);
        fetchedData.map((o) => o.nanoId = nanoid());
        dispatch(fetchDataSuccess(fetchedData));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
    fetchData(props.url);
  }, [props.url, dispatch]);

  return(
    <>
     {(dataError) ? <ErrorAlert /> : null}
     <Table />
    </>
  );
}

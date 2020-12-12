import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from './actions/actionCreators';
import { ErrorAlert } from './ErrorAlert';

export function Data(props){
 const dispatch = useDispatch();
 const { dataError } = useSelector(state => state.dataRed);
 const { dataset } = useSelector(state => state.datasetRed);



 useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataRequest());
          const response = await fetch(dataset);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const fetchedData = await response.json();
        fetchedData.map((o) => o.nanoId = nanoid());
        dispatch(fetchDataSuccess(fetchedData));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
    fetchData();
  }, [dispatch, dataset]);

  return(
    <>
     {(dataError) ? <ErrorAlert /> : null}
    </>
  );
}

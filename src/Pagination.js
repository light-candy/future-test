import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './actions/actionCreators';

export function Pagination() {
  const dispatch = useDispatch();
  const { data, filtered } = useSelector(state => state.dataRed);
  const { currentPage, onPage } = useSelector(state => state.paginationRed);

  const maxPerPage = 50;
  const totalEntries =(filtered) ? filtered.length : data.length;
  const totalPages = Math.ceil(totalEntries/maxPerPage);
  const pageNumbers = Array.from(Array(totalPages).keys());

  const goToPage = (n) => {
    const onNewPage =(filtered) ? filtered.slice(maxPerPage * n, maxPerPage * (n + 1)) : data.slice(maxPerPage * n, maxPerPage * (n + 1));
    dispatch(setCurrentPage(n, onNewPage));
  }
 const nextPage = () => {
     goToPage(currentPage + 1);
 };
 const prevPage = () => {
     goToPage(currentPage - 1);
 };

return(
      <>
        {(!data || data.length <= 50) ? null :
        <div>
         <button onClick={prevPage} className="pagination__arrow" disabled={(currentPage === 0)}>
          <span class="material-icons">
         west
         </span>
       </button>
         {pageNumbers.map((a) =>
          <button
             key={a}
              className={(a === currentPage) ? 'pagination__button pagination__button_active' : 'pagination__button'}
             onClick={() => goToPage(a)}
                  >
          {a + 1}</button>
          )}
         <button onClick={nextPage} className="pagination__arrow" disabled={(currentPage === totalPages - 1)}>
          <span class="material-icons">
        east
         </span>
       </button>
        </div>
}
      </>
  );
}

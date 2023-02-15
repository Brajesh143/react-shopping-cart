import React, { useContext, useState } from 'react';
import { currentPageContext } from '../products/ProductList';

const Paginate = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const current_page_context_value = useContext(currentPageContext);
  const setPaginationCurrentPage = current_page_context_value.set_current_page;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setPaginationCurrentPage(newPage);
  };

  return (
    <div>
      <button className='btn btn-sm btn-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span> {currentPage} </span>
      <button className='btn btn-sm btn-primary' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Paginate;

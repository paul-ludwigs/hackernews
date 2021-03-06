import React from 'react'

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
      pageNumbers.push(i);
  }
    return (
    <nav>
        <ul className='pagination justify-content-center'>
            {pageNumbers.map(number => (
                <li key={number} className="page-sditem">
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination
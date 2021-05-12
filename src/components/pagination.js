import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <center>
            <nav style={{ width: "0" }} aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <Link className="page-link" onClick={() => paginate(number)}>{number}</Link>
                        </li>
                    ))}
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>

            </nav>
        </center>
    );
}

export default Pagination;

import * as React from "react";
import Pagination from 'react-bootstrap/Pagination';
import './paginate.css';
import { paginateContainer } from './paginate.module.css';

const Paginate = ({articlesPerPage, total, pag}) => {
  let items = [];
  for (let number = 1; number <= Math.ceil(total / articlesPerPage); number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => pag(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  
  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
return(
  <div className={paginateContainer}>
    {paginationBasic}
  </div>
)
}

export default Paginate


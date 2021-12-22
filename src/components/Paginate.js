import * as React from "react";
import Pagination from 'react-bootstrap/Pagination'

const Paginate = ({articlesPerPage, total}) => {
  let items = [];
  for (let number = 1; number <= Math.ceil(total / articlesPerPage); number++) {
    items.push(
      <Pagination.Item key={number}>
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
  <div>
    {paginationBasic}
  </div>
)
}

export default Paginate


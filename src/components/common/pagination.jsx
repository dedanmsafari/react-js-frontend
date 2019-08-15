//1.define the size of each page.
//2.handle the onclick event to change pages.
//3.maping of the pages
//We decided to create a pagination util component that we will use in our code for paging
//in stateless functional components we never use  the this keyword.
import React from 'react';
import PropTypes from 'prop-types';//validation.
import _ from 'lodash';
const Pagination = props => {

 const {itemsCount,onPageChange,currentPage, pageSize} = props;

 const pagesCount = Math.ceil(itemsCount / pageSize);//define the number of pages to its upperbound to remove floats
 if (pagesCount === 1) return null;
 const pages = _.range(1, pagesCount + 1);//show  the range of all your pages.1...2...3..4
    return ( 
    
      <nav >
      <ul className="pagination">
        {pages.map(page => 
                  <li  key ={ page }className={ page === currentPage ? 'page-item active' : 'page-item'}>
                    <button className="page-link" onClick={() => onPageChange(page)} >{page}</button>
                    
                    </li>
 )}

      </ul>
    </nav>
     );
}
 
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage:PropTypes.number.isRequired,
   pageSize:PropTypes.number.isRequired

}
 
export default Pagination;
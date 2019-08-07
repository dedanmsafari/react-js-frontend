import React, { Component } from 'react';
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({columns , sortColumn, onSort, data}) => {

    return (  

        <table className="table table-striped table-dark">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
    
      </table> 

    );
}
 
export default Table;
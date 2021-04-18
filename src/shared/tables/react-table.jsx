import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTable } from 'react-table';

export default function ReactTable(props) {
  const { columns, data } = props;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, key) => (
            <TableRow align="left" {...headerGroup.getHeaderGroupProps()} key={key.toString()}>
              {headerGroup.headers.map((column, keyCol) => (
                <TableCell {...column.getHeaderProps()} key={keyCol.toString()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()} key={i.toString()}>
                {row.cells.map((cell, key) => (
                  <TableCell align="left" {...cell.getCellProps()} key={key.toString()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
};

ReactTable.defaultProps = {
  columns: {},
  data: [],
};

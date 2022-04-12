/* eslint-disable react/prop-types */
/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  Table,
  TableRow,
  TableBody,
  Icon,
  TableCell,
  TableContainer,
} from '@material-ui/core';
import Read from '../../Assets/Svg/view.svg';
import Edit from '../../Assets/Svg/edit.svg';
import Delete from '../../Assets/Svg/delete.svg';
import { tableStyles } from './tableStyles';
import Pagination from './Components/Pagination';
import Switch from './Components/Switch';
import TableHeader from './Components/TableHeader';

function MainTable({
  USERLIST,
  TABLE_HEAD,
}) {
  const classes = tableStyles();
  const [page, setPage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isTrue = USERLIST.length % rowsPerPage === 0;
  const maxPage = isTrue ? parseInt(USERLIST.length / rowsPerPage, 10) : parseInt(USERLIST.length / rowsPerPage, 10) + 1;

  const handlePreviousPage = () => {
    const decrementedValue = page - 1;
    // eslint-disable-next-line no-unused-expressions
    decrementedValue >= 0 ? setPage(decrementedValue) : null;
  };

  const handleNextPage = () => {
    const incrementedValue = page + 1;
    // eslint-disable-next-line no-unused-expressions
    incrementedValue < maxPage ? setPage(incrementedValue) : null;
  };

  // slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  console.log(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <>
      <TableContainer className={classes.mainBox}>
        <Table>
          <TableHeader
            headLabel={TABLE_HEAD}
            rowCount={USERLIST.length}
          />
          <TableBody>
            {USERLIST.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const {
                id,
              } = row;
              const finalClass = (index % 2 === 0) ? classes.box : `${classes.box} ${classes.backgroundGrey}`;
              return (
                <TableRow
                  hover
                  key={id}
                  tabIndex={-1}
                  role="checkbox"
                  className={finalClass}
                >
                  { TABLE_HEAD.map((value, tindex) => {
                    const val = value.id;
                    const pageIndex = (page * rowsPerPage) + index;
                    if (tindex === 0) {
                      return <TableCell className={classes.content} align="left">{pageIndex + 1}</TableCell>;
                    }
                    if (val === 'status') {
                      return <TableCell className={classes.content} align="left"><Switch status={USERLIST[pageIndex][val]} /></TableCell>;
                    }
                    if (value.flag === 'viewCollectiblepaymentMethod') {
                      return <TableCell className={classes.content} align="center">{USERLIST[tindex][val]}</TableCell>;
                    }
                    if (value.flag === 'tokenIdWithLink') {
                      return (
                        <TableCell className={classes.content} align="left">
                          <a href="https://etherscan.io/address/0x9f7dd5ea934d188a599567ee104e97fa46cb4496#tokentxns" target="window" style={{ padding: 0, textDecoration: 'none', margin: 0 }}>
                            {USERLIST[pageIndex][val]}
                            {' '}
                          </a>
                        </TableCell>
                      );
                    }
                    if (val === 'actions') {
                      const { read, edit, remove } = value.flag;
                      const { handleViewButton, handleEditButton, handleDeleteButton } = value.callback;
                      if (!read && !edit && !remove) return <></>;
                      return (
                        <TableCell className={classes.content} align="left">
                          { read && (
                          <Icon onClick={() => handleViewButton(row.id)}>
                            <img alt="imageAlt" className={classes.iconRead} src={Read} />
                          </Icon>
                          )}
                          { edit && (
                          <Icon onClick={() => handleEditButton(row.id)}>
                            <img alt="imageAlt" className={classes.iconEdit} src={Edit} />
                          </Icon>
                          )}
                          { remove && (
                          <Icon onClick={() => handleDeleteButton(row.id)}>
                            <img alt="imageAlt" className={classes.iconDelete} src={Delete} />
                          </Icon>
                          )}
                        </TableCell>
                      );
                    }
                    return <TableCell className={classes.content} align="left">{USERLIST[pageIndex][val]}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination currentPage={page} maxPage={maxPage} handlePrevPage={handlePreviousPage} handleNextPage={handleNextPage} />
    </>
  );
}

export default MainTable;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactTable from '../../../shared/tables/react-table';
import { getUsers } from '../redux/user';

export function ListUsers() {
  const { users } = useSelector((state) => state.user);
  const actionDispatcher = useDispatch();

  useEffect(() => {
    actionDispatcher(getUsers());
  }, []);

  const columns = [{
    Header: 'Id',
    accessor: 'id',
  }, {

    Header: 'Name',
    accessor: 'name',
  }, {
    Header: 'Email',
    accessor: 'email',
  }];

  return (
    <ReactTable data={users} columns={columns} />
  );
}

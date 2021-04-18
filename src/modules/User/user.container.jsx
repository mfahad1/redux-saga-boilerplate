import { Card, CardContent } from '@material-ui/core';
import { CreateUser } from './components/createUser';
import { ListUsers } from './components/listUsers';

export default function UserContainer() {
  return (
    <Card>
      <CardContent>
        <CreateUser />
      </CardContent>
      <CardContent>
        <ListUsers />
      </CardContent>
    </Card>
  );
}

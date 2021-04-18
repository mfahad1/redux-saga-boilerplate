import { Person } from '@material-ui/icons';
import UserContainer from '../modules/User/user.container';

const routes = [
  {
    url: '/users',
    component: UserContainer,
    sidebar: true,
    name: 'Users',
    icon: () => <Person />,
  },
];

export const getRoutesForSidebar = () =>
  routes.filter((route) => route.sidebar);

export default routes;

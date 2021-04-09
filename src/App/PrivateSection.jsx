import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AppBar from '../shared/AppBar';
import AppDrawer from '../shared/AppDrawer';

export default function PrivateSection({ children }) {
  const { login, register } = useSelector((state) => state.auth);
  const history = useHistory();

  const [openDrawer, setOpenDrawer] = useState(true);

  if (!login && !register) {
    history.push('/');
    return null;
  }

  return (
    <>
      <AppBar open={openDrawer} handleDrawerClose={() => setOpenDrawer(!openDrawer)} />
      <AppDrawer open={openDrawer} handleDrawerClose={() => setOpenDrawer(false)} />

      {children}
    </>
  );
}

PrivateSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

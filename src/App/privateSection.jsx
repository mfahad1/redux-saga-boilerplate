import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import AppBar from '../shared/appBar';
import AppDrawer from '../shared/appDrawer';
import useStyles from './privateSection.style';
import useAppBarStyles from '../shared/appBar.style';

export default function PrivateSection({ children }) {
  const classes = useStyles();
  const appBarClasses = useAppBarStyles();

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

      <div
        className={clsx({
          [appBarClasses.appBarShift]: openDrawer,
          [classes.container]: true,
        })}
      >
        {children}
      </div>
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

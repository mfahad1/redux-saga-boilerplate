import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Bar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './appBar.style';

export default function AppBar({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Bar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerClose} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App Title
          </Typography>
          <Button color="inherit">Settings</Button>
        </Toolbar>
      </Bar>
    </div>
  );
}

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

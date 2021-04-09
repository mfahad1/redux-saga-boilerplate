import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
} from '@material-ui/core';
import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DefaultPNG from '../assets/images/default.jpg';

import useStyles from './PublicSection.style';

export default function PublicSection({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const { login, register } = useSelector((state) => state.auth);

  if (login || register) {
    history.push('/');
    return null;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7}>
        <img alt="loading..." src={DefaultPNG} className={classes.image} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {children}
      </Grid>
    </Grid>
  );
}

PublicSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

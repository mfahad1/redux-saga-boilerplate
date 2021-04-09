import { Avatar, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './Auth.style';
import { loginRequested } from './redux/auth';

export default function LoginContainer() {
  const classes = useStyles();
  const dispatcher = useDispatch();
  const loginState = useSelector((state) => state.auth.login);
  const history = useHistory();
  console.log({ loginState });
  useEffect(() => {
    if (loginState) {
      history.push('/dashboard');
    }
  }, [loginState]);

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          onClick={() => dispatcher(loginRequested({ name: 'user@yopmail.com', password: 'asdasd' }))}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

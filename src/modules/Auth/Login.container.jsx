import { Avatar, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form as FormikForm } from 'formik';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { InputField } from '../../shared/formik/Input';

import useStyles from './Auth.style';
import { loginSuccess } from './redux/auth';

export default function LoginContainer() {
  const classes = useStyles();
  const dispatcher = useDispatch();
  const loginState = useSelector((state) => state.auth.login);
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required').label('Email'),
    password: Yup.string().required('Required').label('Password'),
  });

  useEffect(() => {
    if (loginState) {
      history.push('/dashboard');
    }
  }, [loginState]);

  const onSubmit = (values) => {
    dispatcher(loginSuccess({ userId: 'asd', role: 'admin' }));
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <div className={classes.form}>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm>
            <InputField
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
            <InputField
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Login
            </Button>
          </FormikForm>
        </Formik>

      </div>
    </div>
  );
}

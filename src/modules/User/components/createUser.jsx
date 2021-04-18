import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Formik, Form as FormikForm } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { InputField } from '../../../shared/formik/input';
import { createUser, getUsers } from '../redux/user';

export function CreateUser() {
  const { createUserSuccess } = useSelector((state) => state.user);
  const actionDispatcher = useDispatch();

  useEffect(() => {
    if (createUserSuccess) {
      actionDispatcher(getUsers());
    }
  }, [createUserSuccess]);

  const initialValues = {
    email: '',
    name: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required').label('Email'),
    name: Yup.string().required('Required').label('Name'),
  });

  const onSubmit = (values) => {
    actionDispatcher(createUser(values));
  };

  return (
    <Card>
      <h1>Create New User</h1>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm>
            <Grid container spacing={3}>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
                <InputField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="name"
                  id="name"
                />
              </Grid>
            </Grid>

            <Grid
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Grid
                item
                xs={3}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create
                </Button>
              </Grid>
            </Grid>

          </FormikForm>
        </Formik>
      </CardContent>

    </Card>
  );
}

import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  LinearProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useSnackbar } from 'notistack';

import authenticationService from '../../common/services/authentication';
import validationSchema from './validationSchema';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login = () => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(validationSchema)
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    closeSnackbar();

    authenticationService
      .login(data)
      .then(() => {})
      .catch(() => {
        setSubmitting(false);
        enqueueSnackbar('Invalid login credentials', {
          variant: 'error'
        });
      });
  };

  return (
    <React.Fragment>
      {submitting && <LinearProgress />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
          <Typography variant="subtitle1">System</Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              as={TextField}
              control={control}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errors.email ? true : false}
              helperText={errors?.email?.message}
            />
            <Controller
              as={TextField}
              control={control}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors.password ? true : false}
              helperText={errors?.password?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={submitting}
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;

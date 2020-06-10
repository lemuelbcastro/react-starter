import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useLoadingSpinnerContext } from './LoadingSpinnerContext';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.appBar + 1,
    color: '#fff'
  }
}));

const LoadingSpinner = () => {
  const classes = useStyles();
  const open = useLoadingSpinnerContext();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress size={60} color="inherit" />
      </Backdrop>
    </div>
  );
};

export default LoadingSpinner;

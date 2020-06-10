import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '5px',
    '& > *': { margin: theme.spacing(0.5) }
  }
}));

const ButtonGroup = (props) => {
  const classes = useStyles();
  const { children } = props;

  return <div className={classes.root}>{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export default ButtonGroup;

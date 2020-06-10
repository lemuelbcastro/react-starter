import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
  const { onClick, ...rest } = props;

  return (
    <Tooltip title="Add">
      <span>
        <IconButton onClick={onClick} {...rest}>
          <AddIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddButton;

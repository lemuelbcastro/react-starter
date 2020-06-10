import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const DeleteButton = (props) => {
  const { onClick, ...rest } = props;

  return (
    <Tooltip title="Delete">
      <span>
        <IconButton onClick={onClick} {...rest}>
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      </span>
    </Tooltip>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteButton;

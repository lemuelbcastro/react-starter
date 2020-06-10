import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, IconButton } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const EditButton = (props) => {
  const { onClick, ...rest } = props;

  return (
    <Tooltip title="Edit">
      <span>
        <IconButton onClick={onClick} {...rest}>
          <EditOutlinedIcon fontSize="small" />
        </IconButton>
      </span>
    </Tooltip>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default EditButton;

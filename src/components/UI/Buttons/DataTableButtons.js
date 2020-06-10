import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import ButtonGroup from './ButtonGroup';

const DataTableButtons = (props) => {
  const {
    onClickAdd,
    onClickEdit,
    onClickDelete,
    disableAdd,
    disableEdit,
    disableDelete,
    addtionalButtons
  } = props;

  return (
    <ButtonGroup>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={onClickAdd}
        disabled={disableAdd}
      >
        Add
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={onClickEdit}
        disabled={disableEdit}
      >
        Edit
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={onClickDelete}
        disabled={disableDelete}
      >
        Delete
      </Button>
      {addtionalButtons}
    </ButtonGroup>
  );
};

DataTableButtons.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  disableAdd: PropTypes.bool,
  disableEdit: PropTypes.bool,
  disableDelete: PropTypes.bool,
  addtionalButtons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default DataTableButtons;

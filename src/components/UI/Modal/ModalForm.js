import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';

const ModalForm = (props) => {
  const {
    children,
    open,
    handleClose,
    handleSubmit,
    dialogTitle,
    scroll,
    contentDividers,
    loading,
    ...rest
  } = props;

  return (
    <Dialog scroll={scroll} open={open} onClose={handleClose} {...rest}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      {loading && <LinearProgress />}
      <DialogContent dividers={contentDividers}>
        <form id="modal-form" onSubmit={handleSubmit}>
          {children}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button form="modal-form" type="submit" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalForm.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  contentDividers: PropTypes.bool,
  scroll: PropTypes.string,
  loading: PropTypes.bool
};

export default ModalForm;

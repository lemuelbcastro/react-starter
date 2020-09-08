import React from 'react';
import PropTypes from 'prop-types';
import { default as Input } from 'react-text-mask';

const MaskedInput = (props) => {
  const { inputRef, mask, ...rest } = props;

  return (
    <Input
      {...rest}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholderChar={'\u2000'}
      guide={false}
    />
  );
};

MaskedInput.propTypes = {
  mask: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])
  )
};

export default MaskedInput;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, StyledInput } from './styles';

let Input = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {
        icon &&
        <Icon
          name={icon}
          size={20}
          color='rgba(255, 255, 255, 0.8)'
        />
      }
      <StyledInput {...rest} ref={ref} />
    </Container>
  );
}

Input = forwardRef(Input);

Input.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Input.defaultProps = {
  style: {}
}

export default Input;

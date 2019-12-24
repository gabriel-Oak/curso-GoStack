import React from 'react';
import { Text } from 'react-native';

import Background from '../../shared/components/Background';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

// import { Container } from './styles';

const SingIn = () => {
  return (
    <Background>
      <Text>SingIn</Text>
      <Input icon='home' placeholder='Digite algo' />
      <Button>Ola</Button>
    </Background>
  );
}

export default SingIn;

import React from 'react'
import { Container, Avatar, Name } from './styles';

const Provider = () => {
  return (
    <Container
      onPress={ () => {} }
    >
      <Avatar source={{uri: 'https://api.adorable.io/avatar/50/rockseat.png'}}/>
      <Name>Emelda Scandinavo</Name>
    </Container>
  );
}

export default Provider;

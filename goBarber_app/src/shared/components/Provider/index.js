import React from 'react'
import { Container, Avatar, Name } from './styles';

const Provider = ({ provider, selectProvider }) => {
  return (
    <Container
      onPress={() => {
        selectProvider(provider);
      }}
    >
      <Avatar
        source={{
          uri: provider.avatar.length
            ? `http://192.168.0.104:3000/files/${provider.avatar[0].path}`
            : `https://api.adorable.io/avatar/50/${provider.name}.png`
        }}
      />
      <Name>{provider.name}</Name>
    </Container>
  );
}

export default Provider;

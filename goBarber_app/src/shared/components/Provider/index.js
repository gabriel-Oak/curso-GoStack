import React from 'react'
import { Container, Avatar, Name } from './styles';

const Provider = ({ name, avatar, id, selectProvider }) => {
  return (
    <Container
      onPress={() => {     
        selectProvider(id);
      }}
    >
      <Avatar source={{
        uri: avatar.length
          ? `http://192.168.10.127:3001/files/${avatar[0].path}`
          : `https://api.adorable.io/avatar/50/${name}.png`
      }} />
      <Name>{name}</Name>
    </Container>
  );
}

export default Provider;

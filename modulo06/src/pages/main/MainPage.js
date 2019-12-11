import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SubmitButton, Input, Form } from './styles';

const Main = () => {
  const [user, setUser] = React.useState();
  const [users, setUsers] = React.useState([]);

  const addUser = () => {
    user && setUsers([
      ...users,
      user
    ]);
    setUser();
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize='none'
          placeholderText='Adicionar usuário'
          onChangeText={text => setUser(text)}
          value={user}
        />
        <SubmitButton onPress={addUser}>
          <Icon name='add' size={20} color='#FFF' />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários'
};

export default Main;
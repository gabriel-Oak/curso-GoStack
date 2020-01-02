import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import Button from '~/shared/components/Button';
import { Container, Avatar, Name, Time } from './styles';
import { ConfirmHooks } from './hooks';

const Confirm = ({ navigation }) => {
  const { state: { params: { timeItem, provider } } } = navigation;
  const { loading, handleConfirm } = ConfirmHooks(navigation);

  console.log(timeItem, provider);

  return (
    <Background>
      <Container>

        <Avatar
          source={{
            uri: provider.avatar.length
              ? `http://192.168.10.127:3000/files/${provider.avatar[0].path}`
              : `https://api.adorable.io/avatar/50/${provider.name}.png`
          }}
        />

        <Name>{provider.name}</Name>

        <Email>{provider.email}</Email>

        <Time>{timeItem.time}</Time>

        <Button
          loading={loading}
          disabled={loading}
          onPress={handleConfirm}
        >
          Confirmar
        </Button>

      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => { navigation.goBack() }}
    >
      <Icon name='chevron-left' size={20} color='#fff' />
    </TouchableOpacity>
  )
});

export default Confirm;

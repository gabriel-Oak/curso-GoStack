import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/shared/components/Background';
import Button from '~/shared/components/Button';
import { Container, Avatar, Name, Email, Time } from './styles';
import { ConfirmHooks } from './hooks';

const Confirm = ({ navigation }) => {
  const { state: { params: { timeItem, provider } } } = navigation;
  const { loading, handleConfirm } = ConfirmHooks(navigation);

  const parsedTime = useMemo(
    () => {
      return formatRelative(parseISO(timeItem.value), new Date(), {
        locale: pt,
        addSuffix: true
      });
    },
    [timeItem]
  );

  return (
    <Background>
      <Container>

        <Avatar
          source={{
            uri: provider.avatar.length
              ? `http://192.168.0.104:3000/files/${provider.avatar[0].path}`
              : `https://api.adorable.io/avatar/50/${provider.name}.png`
          }}
        />

        <Name>{provider.name}</Name>

        <Time>{parsedTime}</Time>

        <Button
          loading={loading}
          disabled={loading}
          onPress={() => {
            handleConfirm(timeItem.value, provider.id);
          }}
        >
          Confirmar agendamento
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

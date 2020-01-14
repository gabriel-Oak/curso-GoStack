import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ provider, date, cancelable, id, cancel, ...rest }) => {
  
  const parsedDate = useMemo(
    () => {
      return formatRelative(parseISO(date), new Date(), {
        locale: pt,
        addSuffix: true
      });
    },
    [date]
  );

  return (
    <Container {...rest}>
      <Left>
        <Avatar
          source={{
            uri: provider.avatar[0]
              ? `http://192.168.100.3:3000/files/${provider.avatar[0].path}`
              : `https://api.adorable.io/avatar/50/${provider.name}.png`
          }}
        />

        <Info>
          <Name>{provider.name}</Name>
          <Time>
            {parsedDate}
          </Time>
        </Info>
      </Left>

      {
        cancelable &&
        <TouchableOpacity onPress={() => cancel(id)}>
          <Icon name='event-busy' size={20} color='#f64c75' />
        </TouchableOpacity>
      }
    </Container>
  );
}

export default Appointment;

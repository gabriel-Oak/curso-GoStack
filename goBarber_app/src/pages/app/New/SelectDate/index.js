import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/shared/components/Background';
import { Container, DateButton, DateText } from './styles';
import { SelectDateHooks } from './hooks';

const SelectDate = () => {
  const { time, changeDate, visible, setVisible } = SelectDateHooks();

  const parsedTime = useMemo(() => (
    format(time, "dd 'de' MMMM 'de' yyyy", { locale: pt })
  ), [time]);

  return (
    <Background>
      <Container>

        <DateButton
          onPress={() => { setVisible(true) }}
        >
          <Icon
            name='event'
            size={20}
            color='#fff'
          />

          <DateText>
            {parsedTime}
          </DateText>
        </DateButton>

        {
          visible &&
          (
            <DateTimePicker
              value={time}
              mode='date'
              display='spinner'
              onChange={changeDate}
              minimumDate={new Date()}

            />
          )
        }

      </Container>
    </Background>
  );
}


SelectDate.navigationOptions = ({ navigation }) => ({
  title: 'Selecionar horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => { navigation.goBack() }}
    >
      <Icon name='chevron-left' size={20} color='#fff' />
    </TouchableOpacity>
  )
});

export default SelectDate;

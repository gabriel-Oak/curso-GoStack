import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import { Container } from './styles';
import { SelectDateHooks } from './hooks';
import DatePicker from '~/shared/components/DatePicker';

const SelectDate = () => {
  const { datePicker } = SelectDateHooks();



  return (
    <Background>
      <Container>

        <DatePicker {...datePicker} />

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

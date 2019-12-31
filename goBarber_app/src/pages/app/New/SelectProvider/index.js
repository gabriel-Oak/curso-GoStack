import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import Provider from '~/shared/components/Provider';
import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const SelectProvider = ({ navigation }) => {
  navigation.navigate('SelectDate', { id: 11 });
  return (
    <Background>
      <Container>
        <List
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }) => (<Provider {...item} />)}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({ navigation: { navigate } }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => { navigate('Dashboard') }}
    >
      <Icon name='chevron-left' size={20} color='#fff' />
    </TouchableOpacity>
  )
});

export default SelectProvider;

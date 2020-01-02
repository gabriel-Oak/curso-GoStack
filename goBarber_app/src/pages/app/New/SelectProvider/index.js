import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';
import Provider from '~/shared/components/Provider';
import { Container, List, Loading } from './styles';
import { SelecProviderHooks } from './hooks';

const SelectProvider = props => {
  const {
    loading,
    providers,
    fetchProviders,
    selectProvider
  } = SelecProviderHooks(props);

  useEffect(() => {
    fetchProviders()
  }, []);

  return (
    <Background>
      <Container>
        {
          loading
            ?
            <Loading />
            :
            <List
              data={providers}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Provider
                  provider={item}
                  selectProvider={selectProvider}
                />
              )}
            />
        }
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

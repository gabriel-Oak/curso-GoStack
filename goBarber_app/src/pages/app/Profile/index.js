import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';

import {
  Container,
  Form,
  Title,
  FormInput,
  Separator,
  SubmitButton
} from './styles';
import { ProfileHooks } from './hooks';

const Profile = () => {
  const { name, email } = ProfileHooks();

  return (
    <Background>
      <Container>
        <Title>
          Meu perfil
        </Title>

        <Form>

          <FormInput
            icon='person-outline'
            autoCorrect={false}
            placeholder='Nome completo'
            returnKeyType='next'
            {...name}
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite seu e-mail'
            returnKeyType='next'
            {...email}
          />

          <Separator />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Sua senha atual'
            returnKeyType='send'
          // {...password}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Sua nova senha'
            returnKeyType='send'
          // {...password}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Confirme sua senha'
            returnKeyType='send'
          // {...password}
          />

          <SubmitButton>
            Atualizar perfil
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='person' size={20} color={tintColor} />
  )
};

export default Profile;

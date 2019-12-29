import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/shared/components/Background';

import {
  Container,
  Form,
  Title,
  FormInput,
  Separator,
  SubmitButton,
  LogOutButton
} from './styles';
import { ProfileHooks } from './hooks';

const Profile = () => {
  const {
    name,
    email,
    oldPassword,
    password,
    confirmPassword,
    loading,
    handleSubmmit,
    handleLogOut
  } = ProfileHooks();

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
            returnKeyType='next'
            autoCapitalize='none'
            {...oldPassword}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Sua nova senha'
            returnKeyType='next'
            autoCapitalize='none'
            {...password}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Confirme sua senha'
            returnKeyType='send'
            autoCapitalize='none'
            {...confirmPassword}
          />

          <SubmitButton
            onPress={handleSubmmit}
            loading={loading}
            disabled={loading}
          >
            Atualizar perfil
          </SubmitButton>

          <LogOutButton onPress={handleLogOut}>
            Sair do GoBarber
          </LogOutButton>

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

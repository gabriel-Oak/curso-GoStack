import React, { useRef } from 'react';
import { Image } from 'react-native';

import Background from '~/shared/components/Background';
import logo from '~/shared/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText
} from './styles';
import { singUpHooks } from './hooks';

const SingUp = props => {
  const {
    name,
    email,
    password,
    loading,
    handleSubmit,
    navigation
  } = singUpHooks(props);

  return (
    <Background>
      <Container>

        <Image source={logo} />

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

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Sua senha super secreta'
            returnKeyType='send'
            {...password}
          />

          <SubmitButton
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
          >
            Registrar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => {
          console.log(navigation);

          navigation.navigate('SingIn');
        }}>
          <SignLinkText>Já possuo uma conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}

export default SingUp;

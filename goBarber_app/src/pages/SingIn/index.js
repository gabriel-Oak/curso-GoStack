import React, { useRef } from 'react';
import { Image } from 'react-native';

import Background from '../../shared/components/Background';
import logo from '~/shared/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText
} from './styles';
import { singInHooks } from './hooks';

const SingIn = ({ navigation}) => {
  const { email, password, handleSubmit, loading } = singInHooks();
  const passwordRef = useRef();

  return (
    <Background>
      <Container>

        <Image source={logo} />

        <Form>
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
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
            {...password}
          />

          <SubmitButton
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
          >
            Acessar
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SingUp');
          }}
        >
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}

export default SingIn;

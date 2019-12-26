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

const SingUp = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {

  }

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
            onSubmitEditing={() => {
              emailRef.current.focus();
            }}
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite seu e-mail'
            ref={emailRef}
            returnKeyType='next'
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Sua senha super secreta'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton
            onPress={handleSubmit}
          >
            Acessar
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

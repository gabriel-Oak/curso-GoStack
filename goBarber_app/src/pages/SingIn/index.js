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

const SingIn = ({ navigation }) => {
  const passwordRef = useRef();

  const handleSubmit = () => {

  }

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

          navigation.navigate('SingUp');
        }}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}

export default SingIn;

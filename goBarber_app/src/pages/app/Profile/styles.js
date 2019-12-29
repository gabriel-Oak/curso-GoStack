import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/shared/components/Input';
import Button from '~/shared/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.ScrollView`
  align-self: stretch;
  margin-top: 50px;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 30px;
  font-size: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 6px;
`;

export const Separator = styled.View`
  height: 1px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

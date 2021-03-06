import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/shared/components/Input';
import Button from '~/shared/components/Button';

export const Container = styled.SafeAreaView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding'
})`
  flex: 1;
  align-items: center;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 30,
    paddingHorizontal: 20
  }
})`
  align-self: stretch;
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

export const LogOutButton = styled(Button)`
  margin-top: 6px;
  background-color: #f54c75;
`;


export const Separator = styled.View`
  height: 1px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

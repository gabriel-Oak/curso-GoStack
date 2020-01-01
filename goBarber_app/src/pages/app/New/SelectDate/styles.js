import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;  
  margin-top: 60px;
  padding: 0 20px;
`;

export const DateButton = styled.TouchableOpacity`
  height: 48px;
  background-color: rgba(0, 0, 0, .1);
  justify-content: center;
  border-radius: 4px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: auto;
`;
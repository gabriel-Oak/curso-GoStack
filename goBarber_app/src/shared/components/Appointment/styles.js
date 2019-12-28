import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  opacity: ${props => (props.past || props.canceled_at ? 0.6 : 1)};
`;

export const Left = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
`;

export const Info = styled.View`
  margin-left: 14px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #999;
`;

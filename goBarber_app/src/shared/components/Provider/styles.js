import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 5px;
  background-color: #fff;
  margin: 8px;
  flex: 1;
  align-items: center;
  padding: 24px 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
  border-radius: 32px;
  border: 1px #7159c1;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

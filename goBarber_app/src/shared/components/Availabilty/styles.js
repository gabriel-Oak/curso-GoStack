import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between'
  }
})`
  flex: 1;
  padding: 0 10px;
  margin-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  flex: 1;
  margin: 10px 10px;
  align-items: center;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
`;

export const ItemText = styled.Text`
  font-size: 18px;
`;
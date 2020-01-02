import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between',
    
  }
})`
  flex: 1;
  margin-top: 60px;
  padding: 0 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 50
})`
  align-self: center;
`;
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
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
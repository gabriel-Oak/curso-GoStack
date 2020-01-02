import React from 'react'
import { ActivityIndicator, Text } from 'react-native';

import { Container, List, ListItem, ItemText } from './styles';

const Availability = ({ loading, availability }) => {
  console.log(availability);

  return (
    <Container>
      {
        loading
          ?
          <ActivityIndicator size={50} />
          :
          <List
            data={availability}
            keyExtractor={item => item.time}
            renderItem={({item}) => (
              <ListItem disabled={!item.available}>
                <ItemText>{item.time}</ItemText>
              </ListItem>
            )}
          />
      }
    </Container>
  );
}

export default Availability;

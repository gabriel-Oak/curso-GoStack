import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from 'react-navigation-stack';

import SelectProvider from './SelectProvider';
import SelectDate from './SelectDate';
import Confirm from './Confirm';

const New = createStackNavigator({
  SelectProvider: {
    screen: SelectProvider
  },
  SelectDate: {
    screen: SelectDate
  },
  Confirm: {
    screen: Confirm
  }
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerLeftContainerStyle: {
      marginLeft: 20
    }
  },
  
});

New.navigationOptions = {
  tabBarLabel: 'Agendar',
  tabBarVisible: false,
  tabBarIcon: ({ tintColor }) => (
    <Icon name='add-circle-outline' size={20} color={tintColor} />
  )
};

export default New;
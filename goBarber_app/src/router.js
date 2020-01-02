import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SingIn from './pages/sing/SingIn';
import SingUp from './pages/sing/SingUp';

import Dashboard from './pages/app/Dashboard';
import New from './pages/app/New';
import Profile from './pages/app/Profile';

const Router = isSigned => createAppContainer(
  createSwitchNavigator({
    Sing: createSwitchNavigator({
      SingIn: {
        screen: SingIn
      },
      SingUp: {
        screen: SingUp
      }
    }),
    App: createBottomTabNavigator({
      Dashboard,
      New,
      Profile
    }, {
      resetOnBlur: true,
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
        style: {
          backgroundColor: '#8b41a8'
        }
      }
    })
  }, {
    initialRouteName: isSigned ? 'App' : 'Sing'
  })
);

export default Router;

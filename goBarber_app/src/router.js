import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SingIn from './pages/sing/SingIn';
import SingUp from './pages/sing/SingUp';

import Dashboard from './pages/app/Dashboard';

const Router = isSigned => createAppContainer(
  createSwitchNavigator(
    {
      Sing: createSwitchNavigator({
        SingIn: {
          screen: SingIn
        },
        SingUp: {
          screen: SingUp
        }
      }),
      App: createBottomTabNavigator({
        Dashboard
      })
    },
    {
      initialRouteName: isSigned ? 'App' : 'Sing'
    }
  )
);

export default Router;

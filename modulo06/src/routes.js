import { createNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main/MainPage';
import User from './pages/user/UserPage';

const Routes = createAppContainer(
  createNavigator(
    {
      Main,
      User
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1'
        },
        headerTintColor: '#FFF'
      }
    }
  )
);

export default Routes;

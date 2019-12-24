import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";

const Routes = createAppContainer(
  createSwitchNavigator({
    SingIn: {
      screen: SingIn,
      path: 'singin'
    },
    SingUp: {
      screen: SingUp,
      path: 'singup'
    }
  })
);

export default Routes;

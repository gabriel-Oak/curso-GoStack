import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={SingIn} />
      <Route path='/register' exact component={SingUp} />

      <Route path='/profile' exact component={Profile} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Switch>
  );
}

export default Routes;

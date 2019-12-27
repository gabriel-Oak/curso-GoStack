import React from 'react';
import { StatusBar } from 'react-native';

import Router from './router';
import { useSelector } from 'react-redux';

const App = () => {
  const token = useSelector(state => state.authReducer.token);
  const Routes = Router(token);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor='#7159c1'
      />

      <Routes />
    </>
  );
};

export default App;

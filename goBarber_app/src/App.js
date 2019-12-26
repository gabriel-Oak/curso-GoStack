import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import Routes from '~/routes';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor='#7159c1'
      />
      
      <Routes />
    </Provider>
  );
};

export default App;

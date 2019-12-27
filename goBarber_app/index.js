import React from 'react';
import { AppRegistry, ActivityIndicator } from 'react-native';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';

import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './src/App.js';

AppRegistry.registerComponent(appName, () => () =>
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<ActivityIndicator size={50} />}
    >

      <App />

    </PersistGate>
  </Provider>
);

/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import getStore from './src/Redux/RootReducer/CreateStore';

const {store, persistor} = getStore();
const Fullapp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
export default Fullapp;
AppRegistry.registerComponent(appName, () => Fullapp);

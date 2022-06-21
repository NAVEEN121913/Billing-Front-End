/* ------------Developed By Naveen Kumar----------------- */
/* ------------Root Reducer----------------- */
import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import commonMiddleware from './CommonMiddleware';
import rootReducer from './RootReducer';
/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
// import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getStore = () => {
  const middleware = [];
  const enhancers = [];
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // if (__DEV__) {
  //   middleware.push(createLogger());
  // }
  enhancers.push(applyMiddleware(...middleware));
  return {store, persistor};
};

export default getStore;

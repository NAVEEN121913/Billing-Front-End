import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComponent from './src/Component/LoginComponent';
import DashBoardComponent from './src/Component/DashBoard';
import ProductComponent from './src/Component/PrdoctList';
import ProductDetailsComponent from './src/Component/ProductDetails';
import AppNavigatior from './src/Navigation/AppNavigation';

const App = () => {
  const Stack = createNativeStackNavigator();
  return <AppNavigatior />;
};

export default App;

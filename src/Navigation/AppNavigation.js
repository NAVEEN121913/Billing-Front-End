/* ------------Developed By Naveen Kumar----------------- */
/* ------------App Navigation ----------------- */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginComponent from '../Component/LoginComponent';
import ProductDetailsComponent from '../Component/ProductDetails';
import LoginContainer from '../Container/LoginContainer';

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsComponent}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;

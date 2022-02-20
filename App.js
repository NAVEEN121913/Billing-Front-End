import React from 'react';
import {View} from 'react-native';
import LoginComponent from './src/Component/LoginComponent';
import DashBoardComponent from './src/Component/DashBoard';
import ProductComponent from './src/Component/PrdoctList';

const App = () => {
  return (
    <View>
      <ProductComponent />
      {/* <LoginComponent /> */}
      {/* <DashBoardComponent /> */}
    </View>
  );
};

export default App;

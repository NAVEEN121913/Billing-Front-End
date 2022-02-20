/* ------------Developed By Naveen Kumar----------------- */
/* ------------Login Component ----------------- */

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {styles} from '../Styles/LoginStyles';

const LoginComponent = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.topIcon}>
        <TextInput.Icon name="account-circle" size={104} color="#f0af54" />
      </View>

      <View style={styles.container}>
        <TextInput
          mode="flat"
          label="Email"
          style={{backgroundColor: 'white'}}
          onChangeText={value => setPayeeName(value)}
          left={<TextInput.Icon name="email" size={24} color="black" />}
        />
        <TextInput
          mode="flat"
          label="Password"
          style={{backgroundColor: 'white'}}
          onChangeText={value => setPayeeName(value)}
          left={<TextInput.Icon name="key" size={24} color="black" />}
        />
      </View>
      <View style={styles.forget}>
        <Text>Forget Password ?</Text>
      </View>
      <View style={styles.btnStlye}>
        <Button
          buttonStyle={{backgroundColor: '#f0af54'}}
          raised={true}
          title="Login"
        />
      </View>
    </View>
  );
};

export default LoginComponent;

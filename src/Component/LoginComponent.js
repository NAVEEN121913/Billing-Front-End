/* ------------Developed By Naveen Kumar----------------- */
/* ------------Login Component ----------------- */

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Button} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {styles} from '../Styles/LoginStyles';

const LoginComponent = props => {
  const {handleSubmit, setFieldValue, values, touched, errors} = {...props};
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.topIcon}>
        <TextInput.Icon name="account-circle" size={104} color="#f0af54" />
      </View>

      <View style={styles.container}>
        <TextInput
          mode="flat"
          label="Email"
          name="email"
          value={values.email}
          style={{backgroundColor: 'white'}}
          onChangeText={val => setFieldValue('email', val)}
          left={<TextInput.Icon name="email" size={24} color="black" />}
        />
        <Text style={{color: 'red'}}>{touched.email && errors.email}</Text>
        <TextInput
          mode="flat"
          label="Password"
          name="password"
          style={{backgroundColor: 'white'}}
          value={values.password}
          onChangeText={val => setFieldValue('password', val)}
          left={<TextInput.Icon name="key" size={24} color="black" />}
        />
        <Text style={{color: 'red'}}>
          {touched.password && errors.password}
        </Text>
      </View>
      <View style={styles.forget}>
        <Text>Forget Password ?</Text>
      </View>
      <View style={styles.btnStlye}>
        <Button
          buttonStyle={{backgroundColor: '#f0af54'}}
          raised={true}
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default LoginComponent;

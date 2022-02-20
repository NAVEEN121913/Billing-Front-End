/* ------------Developed By Naveen Kumar----------------- */
/* ------------DashBoard Component ----------------- */

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {styles} from '../Styles/DashboardStyle';

const DashBoardComponent = () => {
  const consoles = () => {
    console.log('working>>>>>>>>>>>>>>>>.');
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          marginTop: '90%',
        }}>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={consoles}>
            <TextInput.Icon
              name="cart-arrow-right"
              size={104}
              color="#f0af54"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={consoles}>
            <TextInput.Icon name="account-details" size={104} color="#f0af54" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DashBoardComponent;

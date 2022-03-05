/* ------------Developed By Naveen Kumar----------------- */
/* ------------Product List Component ----------------- */

import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, Button, ListItem} from 'react-native-elements';
import {Appbar, List, TextInput} from 'react-native-paper';
import {styles} from '../Styles/ProductStyle';
import {productList} from '../LocalData/ProductData';

const ProductDetailsComponent = () => {
  const Data = productList;
  console.log('Data', Data);
  const navigation = useNavigation();

  return (
    <View>
      <Appbar.Header style={{backgroundColor: '#f0af54', color: 'white'}}>
        <Appbar.BackAction color="white" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Product Details" titleStyle={{color: 'white'}} />
        <Appbar.Action color="white" icon="magnify" />
        <Appbar.Action color="white" icon="dots-vertical" />
      </Appbar.Header>
      {Data.map(data => {
        return (
          <View key={data._id}>
            <View style={styles.containerD}>
              <Text style={styles.titleD}>
                {data.productName},{data.productQty} {data.productUnit}
              </Text>
              <Text>{data.productDescription}</Text>
              <Text>
                <Text style={{fontWeight: 'bold'}}>ProductId :</Text>{' '}
                {data.ProductID}
              </Text>
              <View style={styles.img}>
                <TextInput.Icon
                  size={300}
                  icon="alpha-p-circle-outline"
                  color="#f0af54"
                />
              </View>
              <View>
                <Text style={styles.priceTextD}>Details</Text>
                <Text style={styles.priceText}>
                  Price : ₹{data.productPrice}
                </Text>
                <Text style={styles.priceText}>Brand : {data.brand}</Text>
                <Text style={styles.priceText}>Brand : {data.brand}</Text>
                {data.state === 'avl' ? (
                  <Text style={styles.instk}>In Stock</Text>
                ) : (
                  <Text style={styles.outstk}>Out of Stock</Text>
                )}
              </View>
              <View>
                <Button
                  buttonStyle={{backgroundColor: '#f0af54'}}
                  raised={true}
                  title="Add to Bill"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProductDetailsComponent;

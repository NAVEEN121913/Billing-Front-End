/* ------------Developed By Naveen Kumar----------------- */
/* ------------Product List Component ----------------- */

import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Header, Button, ListItem} from 'react-native-elements';
import {Appbar, List, TextInput} from 'react-native-paper';
import {styles} from '../Styles/ProductStyle';
import {ProductList} from '../Services';

const ProductComponent = () => {
  const [Data, setData] = useState([]);
  const payload = {
    userId: '61ffe8d57568eebebce2046d',
  };

  useEffect(() => {
    const ResponseData = async () => {
      const response = await ProductList(payload);
      setData(response);
    };
    ResponseData();
  }, []);
  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => console.log('Product List>>>>>>', item)}>
        <List.Item
          title={item.productName}
          titleStyle={styles.title}
          description={item.productDescription}
          left={() => <List.Icon size={40} icon="alpha-p-circle-outline" />}
          right={() => (
            <View style={styles.price}>
              <Text style={{fontWeight: 'bold'}}>Price :</Text>
              <Text>₹{item.productPrice}</Text>
            </View>
          )}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Appbar.Header style={{backgroundColor: '#f0af54', color: 'white'}}>
        <Appbar.BackAction color="white" />
        <Appbar.Content title="Product List" titleStyle={{color: 'white'}} />
        <Appbar.Action color="white" icon="magnify" />
        <Appbar.Action color="white" icon="dots-vertical" />
      </Appbar.Header>
      <FlatList data={Data} renderItem={renderItem} key={item => item._id} />
    </View>
  );
};

export default ProductComponent;

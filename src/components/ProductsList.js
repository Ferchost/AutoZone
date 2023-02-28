import { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import ProductItem from './ProductItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProductList = ({ navigation, data }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getLocalData();
  }, [wishList]);

  const getLocalData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      setWishList(jsonValue != null ? JSON.parse(jsonValue) :[]);
    } catch (e) {
      console.log(e);
    }
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorites', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const saveItem = (item) => {
    Alert.alert('Saved', `${item.title} is now in your wishlist`);
    setWishList(current => [...current, item])
    storeData(wishList);
  };



  return (
    <View style={styles.container}>
      {data.loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={data.data}
          renderItem={({ item }) => (
            <ProductItem
              navigation={navigation}
              id={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
              rating={item.rating}
              wishlist={() => saveItem(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};
export default ProductList;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '88%',
    borderRadius: 20,
    fontWeight: 'bold',
    margin: 15,
    backgroundColor: '#ffffff',
  },
  loadingView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

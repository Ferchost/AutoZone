import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ProductList from '../components/ProductsList';
import useGetData from '../API/getProducts';
/* 
Build a product listing page!
Refer to https://fakestoreapi.com/docs for documentation on the api
1. Run yarn install then yarn ios to start the app

2. use this api to get a list of products and display them on the screen https://fakestoreapi.com/products

3. Add a button called "Add to Wishlist" clicking this button should save the item to the users device
4. Add the ability to click the product and navigate to a product details screen, you can use https://fakestoreapi.com/products/1 to get a single product
*/

export default function Products({navigation}) { 
  return (
    <SafeAreaView style={styles.container}>
      <ProductList navigation={navigation}  data={useGetData()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

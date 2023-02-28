import * as React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
//import formatDate from '../../function/formatDate';

function ProductItem({
  navigation,
  title,
  price,
  category,
  image,
  rating,
  id,
  wishlist,
  isInWishList
}) {
  const goDetails = () => {
    navigation.navigate('Details', { id: id });
  };
  return (
    <TouchableOpacity onPress={goDetails} style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />

      <View style={styles.titleView}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.cate}>{category}</Text>
        <Text style={styles.cost}>${price}</Text>
        <Text style={styles.rate}>
          ⭐{rating.rate} ({rating.count})
        </Text>
      </View>
      <View>
      <TouchableOpacity onPress={wishlist} >
        <Text style={styles.love}>
          ⭐
        </Text>
      </TouchableOpacity>
      
      </View>
    </TouchableOpacity>
  );
}
export default ProductItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    fontWeight: 'bold',
    margin: 10,
    height: 120,
    borderBottomWidth: 0.5,
  },
  titleView: {
    height: '75%',
    width: '55%',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 11,
    fontWeight: 'bold',
  },
   love: {
    fontSize: 20,
  },
  cost: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#89CFF0',
  },
});

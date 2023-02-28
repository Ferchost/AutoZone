import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import GetUniqueProduct from '../API/getUniqueProduct';

const Details = ({ route }) => {
  const {id} = route.params;
  
  let data = GetUniqueProduct(id);
   const { title, price, category, image, description, rating } = data.data;
  return (
    <SafeAreaView style={styles.container}>
      {data.loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator />
        </View>
      ) : (
    <ScrollView style={{width:'100%'}}>
    
        <View>
          <View style={styles.image_container}>
            <Image source={{ uri: image }} style={styles.product_image} />
          </View>
          <Text style={styles.categoryText}>{category}</Text>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.categoryText}>Description:</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.rate}>
            ⭐{rating?.rate} ({rating?.count})
          </Text>

          <Text style={styles.cost}>${price}</Text>
        </View>
          </ScrollView>
      )}

    </SafeAreaView>
  );
};
export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  product_image: {
    height: 350,
    width: 350,
    borderRadius: 20,
  },
  image_container: {
    height: 350,
    backgroundColor: '#fff',
    width: '88%',
    margin: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '6%',
  },
  categoryText: {
    fontSize: 14,
    margin: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '6%',
    color: '#89CFF0',
  },
  descriptionText: {
    fontSize: 14,
    margin: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '6%',
    color: '#808080',
  },
  cost: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '6%',
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginRight: '6%',
  },
});

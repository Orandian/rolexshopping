import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Products from "@/constants/Products";
import MainLayout from "@/components/layouts/MainLayout";
import Colors from "@/constants/Colors";
import { useCart } from "@/Provider/CartProvider";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const product = id && Products.find((p) => p.id === +id);
  
  const { cartItems, addToCart } = useCart();
  const isAlreadyAdded = product && cartItems.find((p) => p.id === product.id);

  const navigation = useNavigation();

  const addToCartItems = () => {
    if(!product){
      Alert.alert(
        'error',
        'Failed!',
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ],
        { cancelable: false }
      );
      return;
    }

    if(isAlreadyAdded){
      Alert.alert(
        'Error',
        'You have already added this item in your cart!',
        [
          { text: 'OK', onPress: () => navigation.goBack() }
        ],
        { cancelable: false }
      );

      return;
    }
    
    addToCart(product);
    Alert.alert(
      'Success',
      'Add to cart successfully!',
      [
        { text: 'OK', onPress: () => navigation.goBack() }
      ],
      { cancelable: false }
    );
  }
  return (
    <MainLayout>
      {product ? (
        <View style={styles.container}>
          <View style={styles.content}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.priceBox}>
              <Text style={styles.price}>${product.price}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={addToCartItems}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.light }}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Product not found</Text>
      )}
    </MainLayout>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.9,
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  priceBox: {
    width: "100%",
    paddingLeft: 12,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: Colors.secondary,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
    position: "absolute",
    bottom: 20
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import MainLayout from '@/components/layouts/MainLayout';
import Colors from '@/constants/Colors';
import { useCart } from '@/Provider/CartProvider';
import { ProductsTypes } from '@/constants/Products';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from the cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => removeFromCart(productId),
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to clear the cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: clearCart,
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <MainLayout>
      <Text style={styles.header}>Your Cart</Text>
      <ScrollView>
        {cartItems.length > 0 ? (
          cartItems.map((product: ProductsTypes) => (
            <View key={product.id} style={styles.cartItem}>
              <Image source={product.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity onPress={() => handleRemoveFromCart(product.id)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        )}
        {cartItems.length > 0 && (
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={handleClearCart} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentButton}>
              <Text style={styles.clearButtonText}>Payment</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </MainLayout>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: Colors.secondary,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: Colors.secondary,
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: Colors.light,
    fontSize: 14,
    textAlign: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  clearButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  paymentButton: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: Colors.light,
    fontSize: 16,
  },
  actionContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

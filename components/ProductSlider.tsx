import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductsTypes } from '@/constants/Products';
import Colors from '@/constants/Colors';

type ProductSliderProps = {
    title: string,
    slideProducts: Array<ProductsTypes>
}

const ProductSlider = ({title, slideProducts}: ProductSliderProps) => {
    const renderItem = ({ item }: { item: ProductsTypes }) => (
        <View style={styles.productContainer}>
          <Image source={item.image} style={styles.productImage} />
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      );
  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.subHeader}>{title}</Text>
      </View>

      <FlatList
        data={slideProducts}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ProductSlider

const styles = StyleSheet.create({
    subHeader: {
        fontSize: 20
      },
    productContainer: {
      marginRight: 20,
      marginLeft: 3,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
      width: 250,
      height: 300,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    productImage: {
      width: 200,
      height: 200,
      marginBottom: 20
    },
    productTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 14,
      color: Colors.secondary,
    },
  })
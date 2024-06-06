import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Colors from "@/constants/Colors";
import Products, { ProductsTypes } from "@/constants/Products";
import { Link, useNavigation } from "expo-router";

const Explore = () => {
  const [filter, setFilter] = useState<string>("All");

  const handleFilterChange = (filterName: string) => {
    setFilter(filterName);
  };

  const filteredProducts = Products.filter((product: ProductsTypes) => {
    if (filter === "All") {
      return true;
    } else if (filter === "New") {
      return product.new === 1;
    } else if (filter === "Steel") {
      return product.type === 0;
    } else if (filter === "Leather") {
      return product.type === 1;
    }
    return false;
  });

  const renderProducts = () => {
    return filteredProducts.map((product: ProductsTypes) => (
      <View key={product.id} style={styles.productContainer}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={styles.productPrice}>${product.price}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.secondary,
              paddingHorizontal: 16,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <Link href={product.id.toString()} style={{ color: Colors.light }}>
              detail
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    ));
  };

  return (
    <MainLayout>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, filter === "All" && styles.activeButton]}
          onPress={() => handleFilterChange("All")}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, filter === "New" && styles.activeButton]}
          onPress={() => handleFilterChange("New")}
        >
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, filter === "Steel" && styles.activeButton]}
          onPress={() => handleFilterChange("Steel")}
        >
          <Text style={styles.buttonText}>Steel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, filter === "Leather" && styles.activeButton]}
          onPress={() => handleFilterChange("Leather")}
        >
          <Text style={styles.buttonText}>Leather</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.productsContainer}>{renderProducts()}</View>
      </ScrollView>

      <View style={{ marginBottom: 40 }}></View>
    </MainLayout>
  );
};

export default Explore;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: Colors.light,
  },
  activeButton: {
    backgroundColor: Colors.secondary,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  productContainer: {
    width: "48%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 5,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondary,
  },
});

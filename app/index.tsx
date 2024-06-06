import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/layouts/Header";
import Products from "@/constants/Products";
import ProductSlider from "@/components/ProductSlider";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

export default function RootLayout() {
  return (
    <MainLayout>
      <Header />

      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/rolexlogo.png")}
          style={styles.logoStyle}
        />
      </View>

      <ProductSlider
        title="New Collection"
        slideProducts={Products.filter((p) => p.new === 1)}
      />

      <ProductSlider
        title="Steel"
        slideProducts={Products.filter((p) => p.type === 0)}
      />
      <ProductSlider
        title="Leather"
        slideProducts={Products.filter((p) => p.type === 1)}
      />

      <TouchableOpacity style={styles.button}>
        <Link href="/explore" style={styles.textStyle}>
          Explore
        </Link>
      </TouchableOpacity>

      <View style={{ height: 40 }}></View>
    </MainLayout>
  );
}


const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 300,
    height: 200,
  },
  textStyle: {
    color: Colors.light,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  button: {
    width: "100%",
    backgroundColor: Colors.secondary,
    paddingVertical: 20,
    borderRadius: 20
  },
});

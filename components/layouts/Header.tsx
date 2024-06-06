import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { useCart } from "@/Provider/CartProvider";
import { Link } from "expo-router";
import { useUserProfile } from "@/Provider/ProfileProvider";

const Header = () => {
  const { cartItems } = useCart();
  const { name } = useUserProfile();
  return (
    <View style={styles.headerContainer}>
      <Link href="/profile" style={styles.headerText}>
        {name}
      </Link>

      <Link href="/order" style={styles.cartContainer}>
        <Text style={styles.cartCount}>{cartItems.length}</Text>
        <Image
          source={require("@/assets/images/shopping-cart.png")}
          style={styles.cartImageStyle}
        />
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: Colors.light,
    fontWeight: "bold",
  },
  cartContainer: {
    backgroundColor: Colors.light,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  cartCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartImageStyle: {
    width: 20,
    height: 20,
  },
});

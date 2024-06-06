import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { CartProvider } from "@/Provider/CartProvider";
import { UserProfileProvider } from "@/Provider/ProfileProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <UserProfileProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "ROLEX, YOUR DREAM" }} />
          <Stack.Screen
            name="explore"
            options={{ title: "Explore Your Desire" }}
          />
          <Stack.Screen name="[id]" options={{ title: "Details" }} />
          <Stack.Screen name="order" options={{ title: "Your Items" }} />
          <Stack.Screen name="profile" options={{ title: "User Profile" }} />
        </Stack>
      </UserProfileProvider>
    </CartProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

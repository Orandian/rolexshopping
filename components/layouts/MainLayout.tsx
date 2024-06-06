import { StatusBar, StyleSheet, ScrollView } from "react-native";
import React, { ReactNode } from "react";

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" translucent={false} />
      <ScrollView style={styles.container}>
        {children}
      </ScrollView>
    </>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
});

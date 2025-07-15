import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Input from "../component/Input";

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",     
    backgroundColor: "#fff", 
  },
});

export default LocationScreen;

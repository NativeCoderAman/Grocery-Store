import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomHeader from "../component/CustomHeader";

const TearmsScreen = () => {
  return (

<View style={{flex:1}}>    
  <CustomHeader title={"Terms "}/>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.date}>Last update: 17/2/2023</Text>

      <Text style={styles.description}>
        Please read these terms of service,{"\n"}
        carefully before using our app operated{"\n"}
        by us.
      </Text>

      <Text style={styles.heading}>Conditions of Uses</Text>

      <Text style={styles.paragraph}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
        'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, 

        'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, 

        'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, 
      </Text>
    </ScrollView>
    </View>
  );
};

export default TearmsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  date: {
    color: "gray",
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#000",
    lineHeight: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50", 
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    color: "#000",
    lineHeight: 22,
  },
});

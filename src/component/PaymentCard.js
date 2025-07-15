import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PaymentCard = ({ image, title, quantity, price, container, imageWrapper }) => {
  return (
    <View style={[styles.container, container]}>
      <View style={[styles.imageWrapper, imageWrapper]}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  imageWrapper: {
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  quantity: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#55C364",
  },
});

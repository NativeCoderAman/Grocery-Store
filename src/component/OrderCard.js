import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const OrderCard = ({ OrderId, Address, imageUri, Item, amount, Date, statusType = "previous" }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.rowTop}>
        <Image source={{ uri: imageUri }} style={styles.Image} />
        <View style={styles.details}>
          <Text style={styles.orderId}>#{OrderId}</Text>
          <Text style={styles.address}>{Address}</Text>
          <Text style={styles.items}>{Item}</Text>
        </View>
        <Text style={styles.status}>Delivered</Text>
      </View>

      <View style={styles.rowMiddle}>
        <Text style={styles.datetime}>Date + Time: {Date}</Text>
        <Text style={styles.price}>{amount}</Text>
      </View>

      {statusType === "previous" ? (
        <View style={styles.rowBottom}>

          <View style={{ flexDirection: "row" }}>
            <Icon name="star" style={styles.reviewStars} />
            <Icon name="star" style={styles.reviewStars} />
            <Icon name="star" style={styles.reviewStars} />
            <Icon name="star" style={styles.reviewStars} />
          </View>

          <Button
            title={"Record"}
            wrapper={{ width: "40%" }}
          />
        </View>
      ) : (
        <View style={styles.rowBottom}>
          <Button
            title="Message"
            wrapper={{ width: "45%" }}
            button={{ backgroundColor: "#FFF", borderColor: "#6FCF97", borderWidth: 1 }}
            buttonText={{ color: "#55C364" }}
            onPress={() => navigation.navigate("MessageScreen")}
          />
          <Button
            title="Call"
            wrapper={{ width: "45%" }}
            button={{ backgroundColor: "#6FCF97" }}
          />
        </View>
      )}
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
 

   card: {
    backgroundColor: "#fff",
    borderRadius: wp('3%'),
    padding: wp('4%'),
    elevation: 3,
    marginBottom: hp('1.8%'),
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Image: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('2%'),
    marginRight: wp('2%'),
    resizeMode: "cover",
  },
  details: {
    flex: 1,
    marginLeft: wp('2%'),
  },
  orderId: {
    fontWeight: "bold",
    fontSize: wp('3.5%'),
    color: "#000",
  },
  address: {
    fontSize: wp('3.2%'),
    color: "#888",
  },
  items: {
    fontSize: wp('3.2%'),
    color: "#555",
  },
  status: {
    backgroundColor: "#E0F3E8",
    color: "#55C364",
    fontSize: wp('3%'),
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('3%'),
    overflow: "hidden",
  },
  rowMiddle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp('1.2%'),
  },
  datetime: {
    fontSize: wp('3.2%'),
    color: "#333",
  },
  price: {
    fontWeight: "bold",
    fontSize: wp('4%'),
    color: "#000",
  },
  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: hp('1.5%'),
  },
  reviewStars: {
    fontSize: wp('5%'),
    color: "#6FCF97"
  }


});

import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Button from "./Button";
import BottomSheetModal from "./BottomSheetModal";
import CartSummarySheet from "./CartSummarySheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const ProductCard = ({ image, title, quantity, price, mrp, Cstyle, show, showsecound }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);
  const [Visible, setVisble] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const handleSelect = () => setVisble(false);

  return (
    <View style={[styles.card, Cstyle]}>
      <TouchableOpacity style={styles.iconWrapper} onPress={toggleFavorite}>
        <Icon name="heart" size={wp("4.5%")} color={isFavorite ? "red" : "#ccc"} />
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.txtContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.quantity}>{quantity}</Text>

        <View style={styles.priceAddRow}>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.mrp}>${mrp}</Text>
          </View>

          {count === 0 ? (
            <Button
              title="Add"
              wrapper={{ width: wp("20%"), marginLeft: wp("2%") }}
              button={{ height: hp("4.5%") }}
              buttonText={{ fontSize: wp("3.5%") }}
              onPress={() => {
                increment();
                setVisble(true);
              }}
            />
          ) : (
            <View style={styles.stepperContainer}>
              <TouchableOpacity onPress={decrement} style={styles.stepperButton}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.countText}>{count}</Text>
              <TouchableOpacity onPress={increment} style={styles.stepperButton}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {show && (
          <BottomSheetModal visible={Visible} onClose={() => setVisble(false)} onSelect={handleSelect} />
        )}
        {showsecound && (
          <CartSummarySheet visible={Visible} onClose={() => setVisble(false)} />
        )}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: wp("48%"),
    backgroundColor: "#fff",
    borderRadius: wp("2.5%"),
    padding: wp("3%"),
    marginBottom: hp("2%"),
    position: "relative",
    // shadowColor: "#000",
    // shadowOpacity: 0.05,
    // shadowRadius: 3,
    elevation: 0.5,
  },
  iconWrapper: {
    position: "absolute",
    top: hp("1%"),
    right: wp("2%"),
    zIndex: 1,
  },
  image: {
    width: wp("20%"),
    height: wp("20%"),
    alignSelf: "center",
    resizeMode: "contain",
  },
  txtContainer: {
    marginTop: hp("1%"),
  },
  title: {
    fontSize: wp("3.5%"),
    fontWeight: "600",
    color: "#333",
  },
  quantity: {
    fontSize: wp("3.2%"),
    color: "gray",
    marginVertical: hp("0.5%"),
  },
  priceAddRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  priceRow: {
    alignItems: "flex-start",
  },
  price: {
    fontSize: wp("3.8%"),
    fontWeight: "bold",
    color: "#000",
  },
  mrp: {
    fontSize: wp("3.2%"),
    color: "gray",
    textDecorationLine: "line-through",
    marginTop: hp("0.3%"),
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("3.5%"),
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2%"),
  },
  stepperButton: {
    backgroundColor: "#55C364",
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("0.8%"),
    borderRadius: wp("2%"),
  },
  countText: {
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    marginHorizontal: wp("1%"),
  },

  // Bottom Sheet Modal Styles (optional)
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: wp("5%"),
    borderTopLeftRadius: wp("5%"),
    borderTopRightRadius: wp("5%"),
  },
  sheetTitle: {
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    marginBottom: hp("1%"),
  },
  option: {
    paddingVertical: hp("2%"),
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
  },
  optionText: {
    fontSize: wp("4%"),
  },
  closeBtn: {
    paddingVertical: hp("2%"),
    alignItems: "center",
  },
  closeText: {
    color: "red",
    fontSize: wp("4%"),
  },
});

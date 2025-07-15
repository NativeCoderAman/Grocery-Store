import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheetModal from "./BottomSheetModal";
import Button from "./Button";

const HorizontalProductItem = ({ image, title, quantity, price, stepper, container, qtybtn, imageWrapper ,show }) => {
  const [count, setCount] = useState(0);
  const [Visible, setVisble] = useState(false)


  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };



  const handleSelect = () => {
    setVisble(false);
  };


  return (
    <View style={[styles.container, container]}>
      <View style={[styles.imageWrapper, imageWrapper]}>
        <Image source={{ uri: image }} style={[styles.image, image]} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>



      {count === 0 ? (
        // <TouchableOpacity style={styles.addButton} onPress={() => {
        //   increment();
        //   setVisble(true)
        // }}>
        //   <Text style={styles.btnText}>Add</Text>
        // </TouchableOpacity>

        <Button
          title="Add"
          wrapper={{
            width: 80,
            marginLeft: 4
          }}
          button={{
            height: 40,
          }}
          onPress={() => { increment(); setVisble(true) }}
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
  {show && (
      <BottomSheetModal visible={Visible} onClose={() => setVisble(false)} onSelect={handleSelect} />
  )}

    </View>
  );
};

export default HorizontalProductItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    alignItems: "center",
    // marginBottom: 10,
    // backgroundColor: "red",
    marginTop: 0,
    height: 150
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  quantity: {
    color: "#777",
    fontSize: 12,
    marginBottom: 4,
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#55c364",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  stepButton: {
    paddingHorizontal: 6,
  },
  stepText: {
    fontSize: 16,
    color: "#55c364",
    fontWeight: "bold",
  },
  count: {
    marginHorizontal: 6,
    fontSize: 14,
    fontWeight: "600",
  },


  addButton: {
    backgroundColor: "#55C364",
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepperButton: {
    backgroundColor: "#55C364",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  countText: {
    fontSize: 14,
    fontWeight: "bold",
  },



});

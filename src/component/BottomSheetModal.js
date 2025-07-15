import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Feather";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const BottomSheetModal = ({ visible, onClose, onSelect }) => {
  const navigation=useNavigation()

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
    >
      <View style={styles.bottomSheet}>
        <Text style={styles.sheetTitle}>Select</Text>

        <View style={styles.contentRow}>
          <View style={styles.stepperContainer}>
            <TouchableOpacity onPress={decrement} style={styles.stepperButton}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.countText}>{count}</Text>

            <TouchableOpacity onPress={increment} style={styles.stepperButton}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>

          <Button title="Add to Cart" wrapper={styles.addToCartButton} onPress={()=>navigation.navigate("ProductDetailsScreen")} />
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#f4f4f4",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  stepperButton: {
    // backgroundColor: "#e0e0e0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    color: "green",

  },
  countText: {
    fontSize: 18,
    marginHorizontal: 12,
    fontWeight: "500",
    color: "#222",
  },
  addToCartButton: {
    width: "50%",
    alignSelf: "center",
   
  },
});

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

const CartSummarySheet = ({ visible, onClose, cartItems = 2, total = 25 }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Image
          source={{uri:"https://rukminim2.flixcart.com/image/850/1000/k9k8wi80/coffee/4/8/y/100-classic-instant-coffee-mason-jar-nescafe-original-imafrbtbhpybzz7z.jpeg?q=90&crop=false"}} 
          style={styles.productImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.itemsText}>{cartItems} Items</Text>
          <Text style={styles.priceText}>${total}</Text>
        </View>

        <TouchableOpacity style={styles.viewCartBtn}>
          <Text style={styles.viewCartText}>View Cart</Text>
          <Icon name="arrow-right" size={18} color="#fff" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CartSummarySheet;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    margin: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  productImage: {
    width: 40,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  itemsText: {
    color: '#fff',
    fontSize: 14,
  },
  priceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  viewCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

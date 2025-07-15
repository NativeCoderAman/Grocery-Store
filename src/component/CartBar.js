import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import Button from './Button';

const CartBar = () => {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(100)).current; 

  const toggleCart = () => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    } else {
      setVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity onPress={toggleCart} style={styles.addButton}>
        <Text style={{ color: 'white' }}>Add to Cart</Text>
      </TouchableOpacity> */}

<Button
  onPress={toggleCart}
  title="Add to Cart"
  buttonstyles={{ width: 200, height: 50, alignSelf: 'center', marginTop: 30 }}
/>


      {visible && (
        <Animated.View
          style={[
            styles.cartBar,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.left}>
            <Image
              source={{
                uri: 'https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png',
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.itemsText}>2 Items</Text>
              <Text style={styles.price}>$25</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.viewCart}>View Cart →</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#5ABE69',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  cartBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#5ABE69',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 50,
    marginRight: 10,
  },
  itemsText: {
    color: '#fff',
    fontSize: 14,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewCart: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CartBar;

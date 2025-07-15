import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  StatusBar,
} from "react-native";
import ProductCard from "../component/ProductCard";
import CustomHeader from "../component/CustomHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BestDealScreen = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(100)).current;

  const showCartBar = () => {
    setCartVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const products = [
    {
      id: "1",
      title: "Lays Classic Chips",
      quantity: "150g",
      price: 10,
      mrp: 15,
      image:
        "https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png",
    },
    {
      id: "2",
      title: "Aashirvaad Atta",
      quantity: "5 kg",
      price: 230,
      mrp: 280,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3j38Y5MxYE0-GZEsM3dNmGNaGmpgnzIp7A&s",
    },
    {
      id: "3",
      title: "Parle-G Biscuits",
      quantity: "250g",
      price: 20,
      mrp: 25,
      image: "https://m.media-amazon.com/images/I/71bufOt9zAL.jpg",
    },
    {
      id: "4",
      title: "Tata Salt",
      quantity: "1 kg",
      price: 22,
      mrp: 26,
      image: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg",
    },
    {
      id: "5",
      title: "Maggi Instant Noodles",
      quantity: "70g x 2",
      price: 28,
      mrp: 30,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDso3eD2Aurqw7kYact-OHWwX-nHvP1vMT9g&s",
    },
    {
      id: "6",
      title: "Amul Butter",
      quantity: "500g",
      price: 255,
      mrp: 270,
      image:
        "https://m.media-amazon.com/images/I/51KrxEKN58L._UF894,1000_QL80_.jpg",
    },
    {
      id: "7",
      title: "Haldiram’s Bhujia",
      quantity: "200g",
      price: 45,
      mrp: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczanM2XapWU6xZtlIfJF5h2-fr6GiapZL8w&s",
    },
    {
      id: "8",
      title: "Fortune Sunflower Oil",
      quantity: "1 L",
      price: 130,
      mrp: 145,
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/4/18/e191fa20-2e61-41ca-a0d7-7a7fc8401142_1766_1.png",
    },
    {
      id: "9",
      title: "Britannia Good Day Cookies",
      quantity: "200g",
      price: 35,
      mrp: 40,
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40003708_2-britannia-good-day-cashew-cookies.jpg",
    },
    {
      id: "10",
      title: "Daawat Basmati Rice",
      quantity: "1 kg",
      price: 110,
      mrp: 135,
      image:
        "https://m.media-amazon.com/images/I/61j29HzAsJL._UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5abe69" barStyle="light-content" />
      <CustomHeader title="Best Deal" />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.rowStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductCard
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              mrp={item.mrp}
              image={item.image}
              onAddToCart={() => {
                console.log("Cart Button Clicked");
                showCartBar();
              }}
              Cstyle={{
                width: "100%",
              }}
              show={true}
            />
          </View>
        )}
      />
    </View>
  );
};

export default BestDealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: wp("3%"),
    paddingBottom: hp("2%"),
  },
  rowStyle: {
    justifyContent: "space-between",
    marginBottom: hp("2%"),
  },
  cardWrapper: {
    width: wp("46%"),
  },
});

import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import HorizontalProductItem from "../component/HorizontalProductItem";
import ProductCard from "../component/ProductCard";
import Icon from "react-native-vector-icons/MaterialIcons"
import CustomHeader from "../component/CustomHeader";

const { width } = Dimensions.get("window");

const CheckOut = () => {
  const data = [
    {
      id: "1",
      title: "Surf Excel Easy Wash Detergent Power",
      quantity: "500 ml",
      price: 12,
      mrp: 14,
      image:
        "https://m.media-amazon.com/images/I/619HRPW3elL._UF1000,1000_QL80_.jpg",
    },
    {
      id: "2",
      title: "Fortune Arhar Dal (Toor Dal)",
      quantity: "1 kg",
      price: 10,
      mrp: 12,
      image:
        "https://m.media-amazon.com/images/I/613LB6RiCPL._UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <View style={{flex:1}}>
      <CustomHeader
      title="CheckOut"
      />
    <View style={styles.container}>
      <HorizontalProductItem
        image="https://www.bbassets.com/media/uploads/p/l/126906_10-aashirvaad-atta-whole-wheat.jpg"
        title="Fortune Sun Lite Refined Sunflower Oil"
        quantity="5 L"
        price={12}
        qtybtn={true}
      />
      <HorizontalProductItem
        image="https://www.bbassets.com/media/uploads/p/l/126906_10-aashirvaad-atta-whole-wheat.jpg"
        title="Aashirvaad Shudh Aata"
        quantity="10 kg"
        price={12}
        qtybtn={true}
      />

      <Text style={styles.sectionTitle}>Before you Checkout</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            mrp={item.mrp}
            image={item.image}
            Cstyle={{
              width: width * 0.42,
            }}
          />
        )}
      />

      <View style={styles.summaryBox}>
        <Icon name="discount" color={"green"} style={styles.couponText} />


        <View style={styles.summaryRow}>
          <Text style={styles.label}>Item Total</Text>
          <Text style={styles.value}>$24</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Discount</Text>
          <Text style={[styles.value, { color: "green" }]}>– $2</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Delivery Fee</Text>
          <Text style={[styles.value, { color: "green" }]}>Free</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={[styles.label, { fontWeight: "700" }]}>Grand Total</Text>
          <Text style={[styles.value, { fontWeight: "700" }]}>$22</Text>
        </View>
      </View>

      <View style={styles.deliveryBox}>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.deliveryText}>Delivering to Home <Text style={styles.changeText}>Change</Text></Text>
          <Text style={styles.deliveryAddress}>Noida Sector 4</Text>
        </View>
      </View>
    </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 14,
  },
  productList: {
    paddingBottom: 10,
    gap: 12,
  },
  summaryBox: {
    padding: 14,
    borderRadius: 12,
  },
  couponText: {
    color: "#55C364",
    fontWeight: "600",
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  value: {
    fontSize: 14,
    color: "#333",
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    marginVertical: 10,
  },
  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eafbea",
    padding: 12,
    // marginTop: 20,
    borderRadius: 10,
  },
  deliveryText: {
    fontWeight: "600",
    fontSize: 14,
  },
  changeText: {
    color: "#55C364",
    fontSize: 14,
  },
  deliveryAddress: {
    fontSize: 12,
    color: "#555",
  },
});

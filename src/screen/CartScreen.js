import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import HorizontalProductItem from "../component/HorizontalProductItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomHeader from "../component/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#5abe69" barStyle="light-content" />
      <CustomHeader title={"Add to Cart"} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <HorizontalProductItem
          image="https://www.bbassets.com/media/uploads/p/l/126906_10-aashirvaad-atta-whole-wheat.jpg"
          title="Fortune Sun Lite Refined Sunflower Oil"
          quantity="5 L"
          price={12}
          qtybtn={true}
          show={true}
        />
        <HorizontalProductItem
          image="https://www.bbassets.com/media/uploads/p/l/126906_10-aashirvaad-atta-whole-wheat.jpg"
          title="Aashirvaad Shudh Aata"
          quantity="10 kg"
          price={12}
          qtybtn={true}
          show={true}
        />

        <TouchableOpacity style={styles.couponContainer} onPress={() => navigation.navigate("CouponScreen")}>
          <View style={styles.row}>
            <Icon name="percent" size={wp("4.5%")} color="#55C364" style={styles.icon} />
            <Text style={styles.text}>APPLY COUPON</Text>
          </View>
          <Icon name="chevron-right" size={wp("6%")} color="#000" />
        </TouchableOpacity>

        <View style={styles.summaryBox}>
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
          <View style={styles.deliveryTextWrapper}>
            <Text style={styles.deliveryText}>
              Delivering to Home <Text style={styles.changeText}>Change</Text>
            </Text>
            <Text style={styles.deliveryAddress}>Noida Sector 4</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: wp("4%"),
    paddingBottom: hp("5%"),
    backgroundColor: "#fff",
  },
  couponContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: wp("2%"),
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    marginTop: hp("2.5%"),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: wp("2%"),
  },
  text: {
    fontSize: wp("4%"),
    color: "#000",
    fontWeight: "500",
  },
  summaryBox: {
    marginTop: hp("3%"),
    backgroundColor: "#f7f7f7",
    padding: wp("4%"),
    borderRadius: wp("2.5%"),
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("1.2%"),
  },
  label: {
    fontSize: wp("3.8%"),
    color: "#333",
  },
  value: {
    fontSize: wp("3.8%"),
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: hp("1.5%"),
  },
  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eafbea",
    padding: wp("4%"),
    marginTop: hp("3%"),
    borderRadius: wp("2.5%"),
  },
  deliveryTextWrapper: {
    flex: 1,
    marginLeft: wp("2%"),
  },
  deliveryText: {
    fontWeight: "600",
    fontSize: wp("4%"),
  },
  changeText: {
    color: "#55C364",
    fontSize: wp("4%"),
  },
  deliveryAddress: {
    fontSize: wp("3.5%"),
    color: "#555",
    marginTop: hp("0.5%"),
  },
});

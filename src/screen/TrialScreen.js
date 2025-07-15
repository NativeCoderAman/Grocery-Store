import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import CustomHeader from "../component/CustomHeader";
import Button from "../component/Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TrialScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6FCF97" barStyle="light-content" />
      <CustomHeader title="Free Trial" showSearch={false} />

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://www.pngplay.com/wp-content/uploads/7/Grocery-Background-PNG-Image.png",
          }}
          style={styles.image}
        />

        <View style={styles.iconTitleRow}>
          <MaterialIcons name="verified" size={wp("6%")} color="#6FCF97" />
          <Text style={styles.heading}>Start Your Free Trial</Text>
        </View>

        <Text style={styles.subtext}>
          Try all premium features for 7 days without paying anything. Cancel anytime.
        </Text>

        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Feather name="check-circle" size={wp("4.5%")} color="#319a57" />
            <Text style={styles.featureText}>Unlimited Orders</Text>
          </View>
          <View style={styles.featureItem}>
            <Feather name="check-circle" size={wp("4.5%")} color="#319a57" />
            <Text style={styles.featureText}>Priority Support</Text>
          </View>
          <View style={styles.featureItem}>
            <Feather name="check-circle" size={wp("4.5%")} color="#319a57" />
            <Text style={styles.featureText}>Exclusive Deals</Text>
          </View>
        </View>

        <View style={styles.offerBox}>
          <Feather name="gift" size={wp("4.5%")} color="#6FCF97" style={{ marginRight: wp("2%") }} />
          <Text style={styles.offerText}>No payment required</Text>
        </View>

        <Button
          title="Start Free Trial"
          wrapper={{ alignItems: "center", marginTop: hp("4%") }}
          button={{
            width: wp("85%"),
            height: hp("6%"),
            backgroundColor: "#6FCF97",
            borderRadius: wp("3%"),
            elevation: 4,
          }}
          buttonText={{
            fontSize: wp("4.2%"),
            fontWeight: "600",
            color: "#fff",
          }}
          onPress={() => {
            console.log("Trial Started");
          }}
        />
      </View>
    </View>
  );
};

export default TrialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: wp("6%"),
    marginTop: hp("5%"),
    borderRadius: wp("4%"),
    padding: wp("6%"),
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: wp("60%"),
    height: wp("60%"),
    resizeMode: "contain",
    marginBottom: hp("2%"),
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2%"),
    marginBottom: hp("1%"),
  },
  heading: {
    fontSize: wp("5.2%"),
    fontWeight: "700",
    color: "#333",
  },
  subtext: {
    fontSize: wp("3.8%"),
    color: "#555",
    textAlign: "center",
    lineHeight: hp("2.8%"),
    marginBottom: hp("2%"),
  },
  featureList: {
    width: "100%",
    marginTop: hp("1%"),
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2%"),
    marginBottom: hp("1%"),
  },
  featureText: {
    fontSize: wp("3.8%"),
    color: "#333",
  },
  offerBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F4EA",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("4%"),
    borderRadius: wp("2%"),
    marginTop: hp("2%"),
  },
  offerText: {
    fontSize: wp("3.6%"),
    color: "#319a57",
    fontWeight: "500",
  },
});

import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Button from "./Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Card = ({ image, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftSection}>
          <Text style={styles.heading}>World Food Festival,</Text>
          <Text style={styles.subHeading}>Bring the world to</Text>
          <Text style={styles.subHeading}>your Kitchen!</Text>

          <Button
            title="Shop Now"
            wrapper={styles.buttonWrapper}
            textStyle={styles.buttonText}
            onPress={onPress}
            button={{
              height: hp('4.8%'),
              borderRadius: wp('2.5%'),
              paddingHorizontal: wp('5%'),
              justifyContent: "center",
              marginRight: wp('2.5%')
            }}
          />
        </View>

        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: hp('1.5%'),
  },
  card: {
    backgroundColor: "#E8F9F1",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp('4%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    elevation: 2,
    width: wp('92%'),
    height: hp('18%'),
  },
  leftSection: {
    flex: 1,
    justifyContent: "center",
    gap: hp('0.5%'),
  },
  heading: {
    fontSize: wp('4.3%'),
    fontWeight: "bold",
    color: "#000",
  },
  subHeading: {
    fontSize: wp('3.8%'),
    color: "#000",
  },
  buttonWrapper: {
    marginTop: hp('1.2%'),
    width: wp('35%'),
  },
  buttonText: {
    fontSize: wp('3.2%'),
    color: "#fff",
    fontWeight: "600",
  },
  image: {
    width: wp('32%'),
    height: hp('16%'),
    marginLeft: wp('3%'),
  },
});

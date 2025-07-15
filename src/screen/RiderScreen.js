import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../component/Button";
import Input from "../component/Input";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from "../component/CustomHeader";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const RiderScreen = () => {
  const [activeTip, setActiveTip] = useState("$2");
  const tips = ["No Tips", "$2", "$5", "$10", "$20"];

  return (

<View style={{flex:1}}>

            <CustomHeader title={"Rider Reviews"} header={{ height: 40 }} showSearch={false} />




    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileWrap}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRIbUAcCAjJDfRFCsxVcPriERDmKkiuYc4w&s",
            }}
            style={styles.image}
          />
          <Text style={styles.nameTxt}>Make Johnson</Text>
          <Text style={styles.workTxt}>Delivery Boy</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Text style={styles.rateText}>Please Rate Delivery Service</Text>
          <View style={{flexDirection:"row"}}>
            <Icon name="star" style={styles.stars} />
            <Icon name="star" style={styles.stars} />
            <Icon name="star" style={styles.stars} />
            <Icon name="star" style={styles.stars} />
          </View>

        </View>

        <Text style={styles.tipsLabel}>Add Tips</Text>
        <View style={styles.tipWrap}>
          {tips.map((tip) => (
            <TouchableOpacity
              key={tip}
              style={[
                styles.tipButton,
                activeTip === tip && styles.activeTipButton,
              ]}
              onPress={() => setActiveTip(tip)}
            >
              <Text
                style={[
                  styles.tipText,
                  activeTip === tip && styles.activeTipText,
                ]}
              >
                {tip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Add a Comment"
            inputWrapper={{
              height: 100,
              alignItems: "flex-start",
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 10,
              width: "90%"
            }}
            inputStyle={{
              flex: 1,
              textAlignVertical: "top",
              paddingTop: 10,
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.btncontainer}>
        <Button title="Submit" wrapper={{ alignItems: "center" }} />
      </View>
    </View>
</View>

  );
};

export default RiderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2.5%"),
    backgroundColor:"#fff"
  },
  scrollContent: {
    // paddingBottom: 120,
  },
  profileWrap: {
    alignItems: "center",
    marginBottom: wp("10%"),
  },
  image: {
     width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('12.5%'),
    marginBottom: hp('1%'),
  },
  nameTxt: {
    fontSize: wp('5.2%'),
    fontWeight: "600",
  },
  workTxt: {
    fontSize: wp('3.5%'),
    color: "grey",
    marginBottom: hp('1.2%'),
  },
  reviewContainer: {
    alignItems: "center",
    marginVertical: hp('1%'),
  },
  rateText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  stars: {
    fontSize: wp("7%"),
    color: "#55C364",
  },
  tipsLabel: {
    fontSize: wp('4%'),
    marginBottom: hp('1.2%'),
    paddingHorizontal: wp('3%'),
  },
  tipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: wp('1%'), 
    marginBottom: hp('2%'),
    paddingHorizontal: wp('3%'),

  },
  tipButton: {
    paddingHorizontal: wp("3%"),
     paddingVertical: hp('1%'),
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: wp('3%'),
    marginBottom: hp('1.2%'),
  },
  activeTipButton: {
    backgroundColor: "#55C364",
    borderColor: "#55C364",
  },
  tipText: {
     fontSize: wp('3.6%'),
    color: "#000",
  },
  activeTipText: {
    color: "white",
  },
  btncontainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp('2.5%'),
  },
});

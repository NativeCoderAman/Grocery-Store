import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import HorizontalProductItem from "../component/HorizontalProductItem";
import CreditCardForm from "../component/CreditCardForm";
import Button from "../component/Button";
import PaymentCard from "../component/PaymentCard";
import CustomHeader from "../component/CustomHeader";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const PayementScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardOptions = [
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/512/349/349221.png",
      title: "Use new card",
    },
  ];

  const handleSelect = (id) => {
    setSelectedCard(id);
  };

  return (
      <View style={{flex:1}}>
                <CustomHeader title="Payment" showSearch={false} />

        <View style={styles.container}>
          <View style={styles.scrollSection}>
            <Text style={styles.heading}>Saved Cards</Text>

            <PaymentCard
              image="https://i.pinimg.com/736x/56/fd/48/56fd486a48ff235156b8773c238f8da9.jpg"
              title="7782 3239 3923 3903"
              container={{ height: hp("10%") }}
            />
            <PaymentCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s"
              title="7782 3239 3923 3903"
              container={{ height: hp("10%")}}
            />

            <CreditCardForm />

            {cardOptions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.radioContainer}
                onPress={() => handleSelect(item.id)}
              >
                <View style={styles.left}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.radioOuter}>
                  {selectedCard === item.id && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <Button
              title={"Next"}
              button={{
                width: wp("90%"),
                backgroundColor: "#6FCF97",
              }}
            />
          </View>
        </View>
        </View>

  );
};

export default PayementScreen;


const styles = StyleSheet.create({
 

   safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: wp('4%'),
  },
  scrollSection: {
    flexGrow: 1,
    flexShrink: 1,
    paddingBottom: hp('1.5%'),
  },
  heading: {
    fontSize: wp('5.2%'),
    fontWeight: "600",
    marginBottom: hp('1.2%'),
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: "#eee",
    marginVertical: hp('1%'),
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: wp('8%'),
    height: wp('8%'),
    resizeMode: "contain",
    marginRight: wp('3%'),
  },
  title: {
    fontSize: wp('4.1%'),
    fontWeight: "500",
  },
  radioOuter: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    borderRadius: wp('2.75%'),
    borderWidth: 2,
    borderColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: wp('2.7%'),
    height: wp('2.7%'),
    borderRadius: wp('1.35%'),
    backgroundColor: "#55C364",
  },
  footer: {
    marginBottom: hp('2%'),
  }

  
});

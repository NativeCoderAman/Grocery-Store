import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar
} from "react-native";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get("window");

const SignupScreen = () => {
  const navigation = useNavigation()

  return (
      <View style={styles.Container}>
         <StatusBar
                        backgroundColor={"#ffff"}
                        barStyle="dark-content"
                    />
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />

        <Text style={styles.headtxt}>Create New Account</Text>
        <Text style={styles.txt}>Set up your username and password</Text>
        <Text style={styles.txt}>You can always change it later</Text>

        <View style={styles.inputcontainer}>
          <Input placeholder="Please enter your name"
            inputWrapper={styles.inputBox}
            inputStyle={styles.inputText}

          />
          <Input placeholder="Email"

            inputWrapper={styles.inputBox}
            inputStyle={styles.inputText}
          />
          <Input placeholder="Phone number"

            inputWrapper={styles.inputBox}
            inputStyle={styles.inputText}
          />
          <Input placeholder="Password" isPassword={true}
            inputWrapper={styles.inputBox}
            inputStyle={styles.inputText}
          />
          <Input placeholder="Confirm Password" isPassword={true}
            inputWrapper={styles.inputBox}
            inputStyle={styles.inputText}
          />
          <Button title="Sign Up" wrapper={styles.buttonWrapper}
            onPress={navigation.navigate("HomeScreen")}
            button={{
              height: hp("8%"),
              width:wp("80%")
            }}

            buttonText={{
              color: "#fff",
              fontSize: wp("5%"),
              fontWeight: "500",
            }}

          />

          <View style={styles.RegWrapper}>
            <Text style={styles.regText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.ForTxt} onPress={() => navigation.navigate("Login")}> Login In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  Container: {
    alignItems: "center",
    paddingHorizontal: wp('9%'),
  },
  logo: {
    width: wp('30%'),
    height: wp('30%'),
    marginTop: hp('1%'),
    resizeMode: "contain",
  },
  headtxt: {
    fontSize: wp('6%'),
    fontWeight: "bold",
    color: "#000",
    marginTop: hp('1.5%'),
  },
  txt: {
    fontSize: wp('4%'),
    color: "gray",
    marginTop: hp('0.5%'),
    textAlign: "center",
  },
  inputcontainer: {
    marginTop: hp('3%'),
    width: "100%",
    gap: hp('1.2%'),
  },
  buttonWrapper: {
    width: "100%",
    marginTop: hp('2.5%'),
  },
  RegWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp('2.5%'),
  },
  regText: {
    fontSize: wp('3.8%'),
    color: "#555",
  },
  ForTxt: {
    color: "#5ABE69",
    fontSize: wp('3.8%'),
    fontWeight: "bold",
  },

  inputBox: {
    borderColor: "#4CAF50",
    borderWidth: 1,
    borderRadius: wp('2%'),
    width: "100%",
    alignSelf: "center",
  },
  inputText: {
    color: "#000",
    fontSize: wp('4%'),
  },



});

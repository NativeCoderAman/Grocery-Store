import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SettingsOptionItem from "../component/SettingsOptionItem";
import Button from "../component/Button";
import CustomHeader from "../component/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';





const { width, height } = Dimensions.get("window");


const ProfileScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.topCard}>
                <Text style={styles.heading}>My Profile</Text>

                <View style={styles.row}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{
                                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000",
                            }}
                            style={styles.image}
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Icon name="edit" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoSection}>
                        <Text style={styles.name}>Smith Mate</Text>
                        <Text style={styles.email}>smithmate@example.com</Text>
                    </View>


                </View>
            </View>

            <View style={{  rowGap: hp('1.5%'), padding: wp('3%'), marginTop: hp('3%')}}>
                <SettingsOptionItem icon="account-edit" title="Edit Profile" onPress={() => { navigation.navigate("EditProfileScreen") }} />
                <SettingsOptionItem icon="lock-outline" title="Change Password" onPress={() => { }} />
                <SettingsOptionItem icon="credit-card-outline" title="Payment Method" onPress={() => { navigation.navigate("PayementScreen") }}/>
                <SettingsOptionItem icon="cube-outline" title="My Orders" onPress={() => { navigation.navigate("OrderScreen") }}/>
                <SettingsOptionItem icon="star" title="Rinder Review " onPress={() => { navigation.navigate("RiderScreen") }} />
                <SettingsOptionItem icon="shield-check" title="Trial Page" onPress={() => {navigation.navigate("TrialScreen") }} />
                <SettingsOptionItem icon="file-document-outline" title="Terms & Conditions" onPress={() => { navigation.navigate("TearmsScreen")}} />


<Button title={"LogOut"} />
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
   

    container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topCard: {
    backgroundColor: "#6FCF97",
    borderBottomLeftRadius: wp('10%'),
    borderBottomRightRadius: wp('10%'),
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  heading: {
    textAlign: "center",
    fontSize: wp('4.5%'),
    fontWeight: "700",
    color: "#fff",
    marginBottom: hp('2%'),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    marginRight: wp('4%'),
  },
  image: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    borderRadius: wp('5%'),
    padding: wp('1%'),
  },
  infoSection: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: wp('4.5%'),
    fontWeight: "700",
    color: "#fff",
  },
  email: {
    fontSize: wp('3.5%'),
    color: "#e0e0e0",
    marginTop: hp('0.5%'),
  },

});

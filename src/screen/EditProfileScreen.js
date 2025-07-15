import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, } from "react-native";
import Input from "../component/Input";
import Icon from "react-native-vector-icons/MaterialIcons";
import Button from "../component/Button";
import CustomHeader from "../component/CustomHeader";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';





const EditProfileScreen = () => {

    const [profileImage, setProfileImage] = useState(null)


    const handleImagePick = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.7,
            },
            (response) => {
                if (response.didCancel) {
                    console.log("User cancelled image picker");
                } else if (response.errorCode) {
                    console.log("ImagePicker Error: ", response.errorMessage);
                } else {
                    const uri = response.assets[0].uri;
                    setProfileImage(uri);
                }
            }
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Edit Profile" header={{ height: 60 }} showSearch={false} />
            <View style={styles.Container}>


                <View style={styles.cardContainer}>
                    <Image
                        source={{ uri: profileImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000" }}
                        style={styles.Image}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={handleImagePick}>
                        <Icon name="edit" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>



                <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>

                    <Input
                        placeholder="Entry your name"
                        inputWrapper={styles.inputBox}
                        inputStyle={styles.inputText}
                    />

                    <Input
                        placeholder="Email."
                        inputWrapper={styles.inputBox}
                        inputStyle={styles.inputText}

                    />

                    <Input
                        placeholder="Phone no.."
                        inputWrapper={styles.inputBox}
                        inputStyle={styles.inputText}
                    />

                    <Input
                        placeholder="Address.."
                        inputWrapper={styles.inputBox}
                        inputStyle={styles.inputText}
                    />
                </View>

                <Button title="Update" wrapper={{ alignItems: "center", marginTop: hp('15%') ,marginBottom: hp("5%") }} />
            </View>
        </View>
    )
}
export default EditProfileScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: wp("10"),
    },

    Image: {
        width: wp('25%'),
        height: wp('25%'),
        borderRadius: wp('12.5%')
    },
    editIcon: {
        position: "absolute",
        bottom: 0,
        right: wp('28%'),
        backgroundColor: "#4CAF50",
        borderRadius: wp('5%'),
        padding:  wp('2%'),
    },

    inputBox: {
        borderColor: "#4CAF50",
        borderWidth: 1,
        borderRadius: wp('2%'),
    marginBottom: hp('2%'),
        width: wp("90%"),
        alignSelf: "center"
    },
    inputText: {
        color: "#000",
         fontSize: wp('4%')
    }



})
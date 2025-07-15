import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const LoginButton = ({ title, image,button }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button,button]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={image} style={{ width: wp("6%"), height: hp("6%"), marginRight: wp("3%"), resizeMode: "contain" }} />
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        width: wp("80%"),
        borderWidth: 0.5,
        borderRadius: wp("2%"),
        marginTop: hp('3%'),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:hp("0.5%")

    },
    buttonText: {
        color: "black",
        fontSize:wp("4.5%")
        
    }

})


export default LoginButton;




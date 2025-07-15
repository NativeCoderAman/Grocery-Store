import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const SkipButton = ({ title,onPress,RoundBtn }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{title}</Text>
           
            <TouchableOpacity style={[styles.RoundBtn,RoundBtn]} onPress={onPress}>
                <Icon name="arrowright" size={25} color="white"  style={{fontWeight:"700"}}/>
            </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: wp("5%"),
        paddingVertical:hp("4%")
    },
      RoundBtn: {
        width: wp("10.5%"),
        height: wp("10.5%"),
        backgroundColor: "#54B661",
        borderRadius: wp("5.5%"),
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        alignSelf: "center",
    },
    txt: {
        fontSize: wp("5%"),
        color: "#54B661",
        fontWeight: "600",
        paddingRight: 10,
    }
})


export default SkipButton;
import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import SkipButton from "../component/SkipButton";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width, height } = Dimensions.get("window");

const WithUs = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <SkipButton title="Skip" onPress={() => navigation.navigate("SingupScreen")} />
            <View style={styles.headercontainer}>
                <Image source={require('../assets/man-delivers-fresh.png')} style={styles.Image} />
            </View>

            <View style={styles.centerWrapper}>
                <View style={styles.CardContainer}>
                    <View style={styles.Dot} />
                    <Text style={styles.headtxt}>Buy Groceries Easy </Text>
                    <Text style={styles.headtxt}>With us</Text>
                    <Text style={styles.phargraph}>
                        Get your groceries delivered at your doorstep with our easy to use app.
                    </Text>
                    <SkipButton RoundBtn={{
                        width: wp('16%'),
                        height: wp('16%'),
                        borderRadius: wp('8%'),
                    }}

                        onPress={() => navigation.navigate("Login")}
                    />
                </View>
            </View>
        </View>
    );
};

export default WithUs;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    headercontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    Image: {
        width: wp("150%"),
        resizeMode: "contain"
    },
    Dot: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: wp('2%'),
        backgroundColor: "#54B661",
        marginBottom: hp("2%")
    },
    centerWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    CardContainer: {
        alignItems: "center",
        width: wp("90%"),

    },
    headtxt: {
        fontSize: wp("6%"),
        fontWeight: "600"
    },
    phargraph: {
        fontSize: wp("4.5%"),
        textAlign: "center",
        paddingHorizontal: wp("8%"),
        marginTop: hp("2%"),
        color: "#000"
    }
});

import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from "react-native";
import LoginButton from "../../component/LoginButton";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const LoginScreen = () => {

    const navigation = useNavigation()

    return (
            <View style={styles.Container}>

 <StatusBar
                backgroundColor={"#ffff"}
                barStyle="dark-content"
            />

                <Image
                    source={require("../../assets/Logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.headtxt}>Welcome Back!</Text>
                <Text style={styles.txt}>Login to your account using email</Text>
                <Text style={styles.txt}>or social network</Text>

                <View style={styles.socialButtons}>
                    <LoginButton
                        title="Login With Apple"
                        image={require("../../assets/apple.png")}
                    />
                    <LoginButton
                        title="Login With Google"
                        image={require("../../assets/search.png")}
                    />

                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.txt2}>Or Continue with Email</Text>
                    </View>
                       
                        <Input placeholder="Email"

                            inputWrapper={styles.inputBox}
                            inputStyle={styles.inputText}
                        />
                        <Input placeholder="Password"

                            inputWrapper={styles.inputBox}
                            inputStyle={styles.inputText}
                            isPassword={true}
                        />
                    </View>



                <View style={styles.forgotWrapper}>
                    <TouchableOpacity>
                        <Text style={styles.ForTxt}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <Button title="Login" wrapper={styles.buttonWrapper} onPress={() => navigation.navigate("HomeScreen")}
                    button={{
                        height: hp("8%")
                    }}
                    buttonText={{
                        color: "#fff",
                        fontSize: wp("5%"),
                        fontWeight: "500",
                    }}

                />

                <View style={styles.RegWrapper}>
                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.ForTxt} onPress={() => navigation.navigate("SingupScreen")}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    Container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: wp("6.5%"),
        backgroundColor: "#fff",
    },
    logo: {
        width: wp("50%"),
        resizeMode: "contain",
        marginTop: hp("1.5%"),
    },
    headtxt: {
        fontSize:wp("7%"),
        fontWeight: "bold",
        color: "#000",
        paddingBottom:hp("1.5%")
    },
    txt: {
        fontSize:wp("4%"),
        color: "gray",
    },
    txt2: {
        fontSize: wp("4.5%"),
        color: "gray",
        marginTop: hp("3%"),
        marginBottom: hp("3%"),
    },
    socialButtons: {
        marginTop:hp("3%"),
        gap: hp("1%"),
    },
    forgotWrapper: {
        width: "100%",
        alignItems: "flex-end",
        // marginTop: hp,
        
    },
    ForTxt: {
        color: "#5ABE69",
        fontSize: wp("4%"),
        fontWeight: "600",
    },
    RegWrapper: {
        flexDirection: "row",
        marginTop: hp("3%"),
    },
    buttonWrapper: {
        width: "100%",
        marginTop: hp("2%"),
    },

     inputBox: {
        borderColor: "#4CAF50",
        borderWidth: wp("0.3"),
        borderRadius: 8,
  
        width: "100%",
        alignSelf: "center"
    },
    inputText: {
        color: "#000",
        fontSize: wp("4%"),
    }

});

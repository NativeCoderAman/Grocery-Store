import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import Input from "../component/Input";
import LoginButton from "../component/LoginButton";
import Button from "../component/Button";
import CouponCard from "../component/CouponCard";
import CustomHeader from "../component/CustomHeader";
import { useNavigation } from "@react-navigation/native";



const CouponScreen = () => {

    const navigation=useNavigation()

    const couponData = [
        {
            id: "1",
            title: "Flat 10% OFF on Standard Chartered Digismart Credit Cards",
            description: "No Minimum Order Value",
            code: "DIGISMART",
        },
        {
            id: "2",
            title: "Flat 10% OFF upto $10 on HSBC Cashback Credit Card",
            description: "Total Value of Items Must be $3 or More",
            code: "HSBC10",
        },
        {
            id: "3",
            title: "Flat 10% OFF upto $10 on HSBC Cashback Credit Card",
            description: "Total Value of Items Must be $3 or More",
            code: "HSBC10",
        },
        {
            id: "4",
            title: "Flat 10% OFF upto $10 on HSBC Cashback Credit Card",
            description: "Total Value of Items Must be $3 or More",
            code: "HSBC10",
        },
        {
            id: "5",
            title: "Flat 10% OFF upto $10 on HSBC Cashback Credit Card",
            description: "Total Value of Items Must be $3 or More",
            code: "HSBC10",
        },
        {
            id: "6",
            title: "Flat 10% OFF upto $10 on HSBC Cashback Credit Card",
            description: "Total Value of Items Must be $3 or More",
            code: "HSBC10",
        },


    ];




    return (

        <View style={{ flex: 1 }}>

            <CustomHeader title="Coupons"  header={{height:60}}/>




            <View style={styles.container}>



                <View style={styles.inputWrap}>
                    <View style={{ flex: 1 }}>
                        <Input
                            placeholder="Enter Coupon Code"
                            inputWrapper={{ borderWidth: 0, backgroundColor: "transparent", height: 50 }}
                            inputStyle={{}}
                        />
                    </View>

                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>


                {/* <View style={styles.inputWrap}>
                <Input
                    placeholder="Enter Coupon Code"
                    inputWrapper={styles.inputWrapper}
                    inputStyle={styles.inputStyle}
                />
                <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
            </View> */}


                <View style={styles.cardCcontainer}>
                    <FlatList
                        data={couponData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <CouponCard
                                title={item.title}
                                subtitle={item.description}
                                code={item.code}
                                onApply={()=>{navigation.navigate("PayementScreen")}}
                            />
                        )}
                        contentContainerStyle={{ paddingTop: 16 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>



            </View>
        </View>
    );
};

export default CouponScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        backgroundColor: "#fff",
        margin: 5
    },
    inputWrap: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        paddingHorizontal: 10,
        marginTop: 10,
        height: 50,
    },
    inputStyle: {
        paddingVertical: 0,
        paddingHorizontal: 8,
    },
    applyButton: {
        backgroundColor: "#5ABE69",
        height: 45,
        paddingHorizontal: 16,
        marginTop: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 13,
        color: "#777",
        marginBottom: 10,
    },
    codeRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    codeBox: {
        backgroundColor: "#e8f8ec",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    codeText: {
        color: "#35A85B",
        fontWeight: "bold",
    },
    smallApplyBtn: {
        backgroundColor: "#5ABE69",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },

    applyButtonText: {
        color: "#fff",
        fontWeight: "600",
    },



});

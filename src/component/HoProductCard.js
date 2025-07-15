import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Button from "./Button";

const HoProductCard = ({ image, title, quantity, price, mrp, Cstyle, onAddToCart }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <View style={[styles.card, Cstyle]}>
            <TouchableOpacity style={styles.iconWrapper} onPress={toggleFavorite}>
                <Icon name="heart" size={20} color={isFavorite ? "red" : "#ccc"} />
            </TouchableOpacity>

            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.txtContainer}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Text style={styles.quantity}>{quantity}</Text>

                <View style={styles.priceAddRow}>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>${price}</Text>
                        <Text style={styles.mrp}>${mrp}</Text>
                    </View>

                    <Button
                        title="Add"
                        wrapper={{
                            width:70,
                        }}
                        button={{
                            height:30,
                                                       
                        }}
                       
                    />
                </View>
            </View>
        </View>
    );
};

export default HoProductCard;

const styles = StyleSheet.create({
    card: {
        width: 160,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginRight: 10,
        marginBottom: 10,
        position: "relative",
    },
    iconWrapper: {
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 1,
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        resizeMode: "contain",
    },
    txtContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 13,
        fontWeight: "600",
        color: "#333",
    },
    quantity: {
        fontSize: 11,
        color: "gray",
        marginVertical: 2,
    },
    priceAddRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    mrp: {
        fontSize: 12,
        color: "gray",
        textDecorationLine: "line-through",
        marginLeft: 6,
    },
    button: {
        backgroundColor: "#55C364",
        width: 60,
        height: 28,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 11,
    },
});

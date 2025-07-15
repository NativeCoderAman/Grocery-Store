import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather"


const DeatilsCard = ({ name, address, city, uri, image, leftImage = false }) => {
    return (

        <View style={styles.card}>

            <View style={styles.leftContainer}>

                {!leftImage && uri && (
                    <Image source={{ uri }} style={styles.image} />
                )
                }
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.city}>{city}</Text>
            </View>
            <TouchableOpacity>
                <Feather name="edit" size={24} color="#55C364" />
            </TouchableOpacity>
        </View>


    )
}

export default DeatilsCard

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 15,
        borderRadius: 8,
        elevation: 4,
        marginBottom: 10,
    },

    leftContainer: {
        flex: 1,
    },

    rightContainer: {
        paddingLeft: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    address: {
        fontSize: 14,
        color: "#555",
    },
    city: {
        fontSize: 14,
        color: "#555",
    },

    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    }

})
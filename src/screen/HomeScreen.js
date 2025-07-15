import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Input from "../component/Input";
import CatCard from "../component/CatCard";
import Card from "../component/Card";
import ProductCard from "../component/ProductCard";
import { useNavigation } from "@react-navigation/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { width } = Dimensions.get("window");

    const categories = [
        {
            id: "1",
            title: "Vegetables & Fruits",
            image: { uri: "https://static.vecteezy.com/system/resources/thumbnails/029/720/177/small_2x/mixed-fruit-transparent-background-png.png" },
        },
        {
            id: "2",
            title: "Dairy & Breakfast",
            image: { uri: "https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F11%2FYogurt-ad-Illustration-on-transparent-background-PNG.png&w=3840&q=75" },
        },
        {
            id: "3",
            title: "Cold Drinks & Juices",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZlhiw41_CZh2vEGb-FOremlbqQUc8y3Hbw&s" },
        },
        {
            id: "4",
            title: "Instant & Frozen Food",
            image: { uri: "https://img.freepik.com/free-psd/delicious-frozen-vegetable-chicken-stirfry-resealable-bag_191095-83135.jpg?semt=ais_hybrid&w=740" },
        },
        {
            id: "5",
            title: "Tea & Coffee",
            image: { uri: "https://w7.pngwing.com/pngs/914/332/png-transparent-coffee-cup-tea-cafe-brown-coffee-food-cafe-photography-thumbnail.png" },
        },
        {
            id: "6",
            title: "Atta, Rice & Dal",
            image: { uri: "https://www.bbassets.com/media/uploads/p/l/126906_10-aashirvaad-atta-whole-wheat.jpg" },
        },
        {
            id: "7",
            title: "Masala, Oil & Dry Fruits",
            image: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWg63ibCi6IMV8nOvX2qvwp-Js8HHgunm7g&s" },
        },
        {
            id: "8",
            title: "Chips & Snacks",
            image: { uri: "https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png" },
        },
    ];

    const products = [
        {
            id: "1",
            title: "Lays Classic Chips",
            quantity: "150g",
            price: 10,
            mrp: 15,
            image: "https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png",
        },
        {
            id: "2",
            title: "Coca Cola Can",
            quantity: "350ml",
            price: 20,
            mrp: 30,
            image: "https://wallpapers.com/images/hd/assorted-soft-drinks-collection-0bssdibxr7paa77c.png",
        },
        {
            id: "3",
            title: "Oreo Biscuits",
            quantity: "120g",
            price: 25,
            mrp: 35,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShKQ22CEnRrRrFxMMOf5yoCpok-Xp-YpGXg&s",
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#5abe69" barStyle="like-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>

                    <View style={styles.locationWrapper}>
                        <View style={styles.leftSection}>
                            <Icon name="map-pin" size={wp("6.5%")} color="#55C364" />
                            <View style={styles.textGroup}>
                                <View style={styles.homeRow}>
                                    <Text style={styles.homeText}>Home</Text>
                                    <Icon name="chevron-down" size={wp("4.5%")} style={{ marginLeft: wp("1%") }} />
                                </View>
                                <Text style={styles.addressText}>6391 Eligin st noida 1232</Text>
                            </View>
                        </View>
                        <View style={styles.rightIcons}>
                            <Icon name="bell" size={wp("6.5%")} color="#000" onPress={() => navigation.navigate("NotificationScreen")} />
                            <Icon name="shopping-bag" size={wp("6.5%")} color="#000" onPress={() => navigation.navigate("SubCategoryScreen")} />
                        </View>
                    </View>



                    <View style={styles.searchWrapper}>
                        <Input
                            placeholder="Search..."
                            showSearchIcon={true}
                            borderColor="#ccc"
                            inputStyle={{
                                fontSize: wp("4.5%"),
                            }}
                            inputWrapper={{
                                backgroundColor: "#f5f5f5",
                                borderRadius: wp("2%"),
                                borderColor: "#FFFFFF",
                                paddingHorizontal: wp("2%"),
                                flex: 1,
                                maxWidth: wp("78%"),
                                marginRight: wp("2%"),
                                elevation: 1,
                            }}
                        />
                        <TouchableOpacity style={styles.filter}>
                            <Icon name="sliders" size={wp("6%")} color="#fff" />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.CatContainer}>
                        <Text style={styles.sectionTitle}>Show By Category</Text>
                        <Text style={styles.linkText} onPress={() => navigation.navigate("SubCategoryScreen")}>See All</Text>
                    </View>
                    <FlatList
                        data={categories}
                        renderItem={({ item }) => <CatCard title={item.title} image={item.image} />}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                        columnWrapperStyle={{ justifyContent: "space-evenly" }}
                        contentContainerStyle={{ paddingTop: hp("1%") }}
                    />

                    <Card
                        image={require("../assets/sprite.png")}
                        onPress={() => navigation.navigate("ProductDetailsScreen")}
                    />

                    <View style={styles.CatContainer}>
                        <Text style={styles.sectionTitle}>Best Deal</Text>
                        <Text style={styles.linkText} onPress={() => navigation.navigate("BestDealScreen")}>See All</Text>
                    </View>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <ProductCard
                                image={item.image}
                                title={item.title}
                                quantity={item.quantity}
                                price={item.price}
                                mrp={item.mrp}
                                show={false}
                                showsecound={true}
                                Cstyle={{ marginLeft: wp("1%"), padding: wp("1%") }}
                            />
                        )}
                    />





                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        paddingHorizontal: wp("3%"),
    },
    locationWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: hp("1%"),
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    textGroup: {
        marginLeft: wp("3%"),
    },
    homeRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    homeText: {
        fontSize: wp("4.5%"),
        fontWeight: "bold",
    },
    addressText: {
        fontSize: wp("3.5%"),
        color: "gray",
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("2%"),
    },
    inputContainer: {
        flex: 1,
    },
    filter: {
        backgroundColor: "#5abe69",
        width: wp("12%"),
        height: wp("12%"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp("3%"),
        marginBottom:hp("2%")
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("4%"),
    },
    CatContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp("2%"),
        paddingVertical: hp("0.5%"),
    },
    sectionTitle: {
        fontWeight: "700",
        fontSize: wp("4%"),
    },
    linkText: {
        color: "#55C364",
        fontSize: wp("4%"),
    },
});

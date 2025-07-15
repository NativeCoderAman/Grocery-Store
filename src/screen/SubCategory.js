import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    StatusBar
} from "react-native";
import ProductCard from "../component/ProductCard";
import categoryWiseProducts from "../data/Categorydata";
import CustomHeader from "../component/CustomHeader";
import CartSummarySheet from "../component/CartSummarySheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MotiView } from "moti";


const { width } = Dimensions.get("window");

const SubCategoryScreen = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartModalVisible, setCartModalVisible] = useState(false);



    const data = [
        {
            _id: "1",
            name: "Vegetables",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarvL8ZykBWaAJaqJ1EzvwAcTcPN7XXaFYy2xaoS-aBoqDqH9UJHrpxp14Z-ZAU0tLImI&usqp=CAU",
        },
        {
            _id: "2",
            name: "Fruits",
            image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjAyLW0wMS1renJybmN0bS5wbmc.png",
        },
        {
            _id: "3",
            name: "Snacks",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqyw376zacnIFU2N-huM0oiDEQDN4zUP7ZQ&s",
        },
        {
            _id: "4",
            name: "Drinks",
            image: "https://toppng.com/uploads/preview/cold-drinks-hostel-11550196418vryftufxbu.png",
        },
        {
            _id: "5",
            name: "Vegetables",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarvL8ZykBWaAJaqJ1EzvwAcTcPN7XXaFYy2xaoS-aBoqDqH9UJHrpxp14Z-ZAU0tLImI&usqp=CAU",
        },
        {
            _id: "6",
            name: "Fruits",
            image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjAyLW0wMS1renJybmN0bS5wbmc.png",
        },
        {
            _id: "7",
            name: "Snacks",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqyw376zacnIFU2N-huM0oiDEQDN4zUP7ZQ&s",
        },
        {
            _id: "8",
            name: "Drinks",
            image: "https://toppng.com/uploads/preview/cold-drinks-hostel-11550196418vryftufxbu.png",
        },
        {
            _id: "9",
            name: "Snacks",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqyw376zacnIFU2N-huM0oiDEQDN4zUP7ZQ&s",
        },
        {
            _id: "10",
            name: "Drinks",
            image: "https://toppng.com/uploads/preview/cold-drinks-hostel-11550196418vryftufxbu.png",
        },
    ];

    const [selected, setSelected] = useState(data[0]._id);
    const [selectCategory, setSelectCategory] = useState(data[0].name);
    const productsToShow = categoryWiseProducts[selectCategory] || [];

    useEffect(() => {
        const category = data.find((item) => item._id === selected);
        if (category) {
            setSelectCategory(category.name);
        }
    }, [selected]);

    const cardWidth = (wp('100%') - wp('20%') - wp('15%')) / 2;


    return (
        <View style={{ flex: 1 }}>

            <StatusBar backgroundColor="#5abe69" barStyle="light-content" />

            <CustomHeader title="Sub Category" />

            <View style={styles.container}>

                <View style={styles.sidebar}>


                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => {
                            const isSelected = selected === item._id;

                            return (


                                <MotiView
                                    from={{ scale: 1 }}
                                    animate={{ scale: isSelected ? 1.30 : 1 }}
                                    transition={{
                                        type: 'spring',
                                        damping: 10,
                                        stiffness: 1000,
                                    }}
                                >



                                    <TouchableOpacity
                                        onPress={() => setSelected(item._id)}
                                        style={[
                                            styles.categoryBtn,
                                            isSelected && styles.activeCategory,
                                        ]}
                                    >
                                        <Image source={{ uri: item.image }} style={styles.categoryImage} />
                                        <Text
                                            style={[
                                                styles.categoryText,
                                                isSelected && styles.activeText,
                                            ]}
                                        >
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                </MotiView>
                            );
                        }}
                    />



                </View>

                <View style={styles.rightSection}>
                    <FlatList
                        data={productsToShow}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View
                                style={{
                                    width: cardWidth,
                                    marginBottom: 16,
                                    marginRight: index % 2 === 0 ? 12 : 0,
                                }}
                            >
                                <ProductCard
                                    image={item.image}
                                    title={item.title}
                                    quantity={item.quantity}
                                    price={item.price}
                                    mrp={item.mrp}

                                    Cstyle={{
                                        width: '100%',
                                    }}
                                    showsecound={true}
                                />

                                <CartSummarySheet
                                    visible={cartModalVisible}
                                    onClose={() => setCartModalVisible(false)}
                                    cartItems={1}
                                    total={selectedProduct?.price || 0}
                                    image={selectedProduct?.image}
                                />



                            </View>
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    sidebar: {
        width: wp('20%'),
        borderRightWidth: 1,
        borderColor: "#ddd",
        paddingVertical: hp('1.5%'),
        backgroundColor: "#fff",
    },
    categoryBtn: {
        alignItems: "center",
        marginVertical: hp('1%'),
        paddingVertical: hp('0.8%'),
    },
    activeCategory: {
        // backgroundColor: "#c4fcc2",
        borderRadius: wp('2%'),
    },
    categoryImage: {
        width: wp('13.3%'),
        height: wp('13%'),
        borderRadius: wp('3%'),
        backgroundColor: "#f1f1f1",
        
    },
    categoryText: {
        fontSize: wp('2.5%'),
        color: "gray",
        marginTop: hp('0.5%'),
        textAlign: "center",
    },
    activeText: {
        color: "green",
        fontWeight: "bold",
    },
    rightSection: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        paddingTop: hp('1.5%'),
    },


});

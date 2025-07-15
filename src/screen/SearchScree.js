import React, { useState } from "react";
import Input from "../component/Input";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import ProductCard from "../component/ProductCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../component/CustomHeader";

const { width } = Dimensions.get("window");

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const data = [
    {
      id: "1",
      title: "Lays Classic Chips",
      quantity: "150g",
      price: 10,
      mrp: 15,
      image:
        "https://toppng.com/uploads/preview/lays-classic-potato-chips-packet-11528330804od4xmycz4k.png",
    },
    {
      id: "2",
      title: "Coca Cola Can",
      quantity: "350ml",
      price: 20,
      mrp: 30,
      image:
        "https://wallpapers.com/images/hd/assorted-soft-drinks-collection-0bssdibxr7paa77c.png",
    },
    {
      id: "3",
      title: "Oreo Biscuits",
      quantity: "120g",
      price: 25,
      mrp: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShKQ22CEnRrRrFxMMOf5yoCpok-Xp-YpGXg&s",
    },
  ];

  const filterdata = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchSubmit = () => {
    if (search.trim() === "") return;

    const match = data.find((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (match && !recentSearches.find((r) => r.id === match.id)) {
      setRecentSearches((prev) => [match, ...prev.slice(0, 5)]);
    }

    setSearch("");
  };

  return (
    <View style={styles.container}>

             <StatusBar backgroundColor="#5abe69" barStyle="like-content" />
 

      <CustomHeader showSearch={false} />
      <View style={styles.searchRef}>
        <Input
          placeholder={"Search..."}
          showSearchIcon={true}
          onChangeText={(text) => setSearch(text)}
          inputStyle={{
            width: wp("90%"),
          }}
          value={search}
          onSubmitEditing={handleSearchSubmit}
          inputWrapper={{
            width: wp("90%"),
            borderColor: "#fff",
            backgroundColor: "#F9F6EE",
            elevation: 1,
          }}
        />

        {recentSearches.length > 0 && (
          <View style={styles.recentWrapper}>
            <Text style={styles.sectionTitle}>Recent Search</Text>
            <View style={styles.tagContainer}>
              {recentSearches.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSearch(item.title)}
                >
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <View style={styles.trendingHeader}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
        </View>

        <FlatList
          data={filterdata}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              mrp={item.mrp}
              image={item.image}
              Cstyle={{
                width: wp("42%"),
              }}
          show={true}

            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchRef: {
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    color: "#333",
    marginBottom: hp("1%"),
  },
  trendingHeader: {
    width: "100%",
    paddingHorizontal: wp("5%"),
    marginTop: hp("4%"),
  },
  recentWrapper: {
    marginTop: hp("2.5%"),
    paddingHorizontal: wp("5%"),
    width: "100%",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: wp("2.5%"),
  },
  tag: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("0.8%"),
    borderRadius: wp("3%"),
    marginBottom: hp("1%"),
  },
  tagText: {
    fontSize: wp("3.5%"),
    color: "#333",
  },
  productList: {
    paddingLeft: wp("5%"),
    marginTop: hp("2%"),
    paddingBottom: hp("2%"),
  },
});

export default SearchScreen;

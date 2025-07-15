import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const CustomHeader = ({ title, showSearch = true, onSearchPress }) => {
  const navigation = useNavigation();

  return (
    <View >
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={wp("6%")} color="black" />
        </TouchableOpacity>

        <Text numberOfLines={1} style={styles.title}>{title}</Text>

        {showSearch ? (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Icon name="search-outline" size={wp("6%")} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButton} />
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
 
  header: {
    height: hp("8%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("4%"),
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  iconButton: {
    width: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: wp("4.5%"),
    fontWeight: "bold",
    color: "#000",
  },
});

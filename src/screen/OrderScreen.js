import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import Button from "../component/Button";
import OrderCard from "../component/OrderCard";
import CustomHeader from "../component/CustomHeader";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const OrderScreen = () => {
  const [color, setColor] = useState("Previous");

  const orderData = [
    {
      id: "ORD-001",
      address: "123 Main Street, Sector 4, Noida",
      imageUri: "https://cdn.mafrservices.com/sys-master-root/h44/h6b/63108965269534/880188_main.jpg?im=Resize=480",
      item: "3 items",
      amount: "$22",
      date: "2025-06-20 14:30",
    },
    {
      id: "ORD-002",
      address: "456 Park Lane, New Delhi",
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOarTiL5SYxq7Ard6foYMWAsxuERCPUd7hQ&s",
      item: "5 items",
      amount: "$45",
      date: "2025-06-21 10:00",
    },
    {
      id: "ORD-003",
      address: "Flat 101, Gaur City, Greater Noida",
      imageUri: "https://5.imimg.com/data5/YG/IP/MY-25097754/ashirwad-wheat-flour-500x500.png",
      item: "1 item",
      amount: "$12",
      date: "2025-06-22 18:10",
    },
    {
      id: "ORD-004",
      address: "22B, Galaxy Apartments, Pune",
      imageUri: "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_UF894,1000_QL80_.jpg",
      item: "2 items",
      amount: "$30",
      date: "2025-06-22 16:00",
    },
    {
      id: "ORD-005",
      address: "Block A, MG Road, Bangalore",
      imageUri: "https://m.media-amazon.com/images/I/51Khdi8jjnL.jpg",
      item: "6 items",
      amount: "$78",
      date: "2025-06-23 09:15",
    },
    {
      id: "ORD-006",
      address: "89 Sunrise Complex, Ahmedabad",
      imageUri: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_UF894,1000_QL80_.jpg",
      item: "4 items",
      amount: "$49",
      date: "2025-06-24 11:45",
    },
    {
      id: "ORD-007",
      address: "14/1, College Road, Chennai",
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC8VN8qXO8FKxF6Q0pHfs3ll_2d4Jii0_dCECVl52aoPzOI7Lc1aElhFdqesZJ-8sA7M&usqp=CAU",
      item: "2 items",
      amount: "$19",
      date: "2025-06-25 19:05",
    }
  ];

  const upcomingOrders = [
    {
      id: "ORD-101",
      address: "79 Green Park, South Delhi",
      imageUri: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_UF894,1000_QL80_.jpg",
      item: "2 items",
      amount: "$34",
      date: "2025-07-01 12:00",
    },
    {
      id: "ORD-102",
      address: "Plot 12, Gandhi Nagar, Bhopal",
      imageUri: "https://m.media-amazon.com/images/I/51Khdi8jjnL.jpg",
      item: "1 item",
      amount: "$18",
      date: "2025-07-02 09:30",
    },
    {
      id: "ORD-103",
      address: "Tower B2, Rajnagar Extension, Ghaziabad",
      imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC8VN8qXO8FKxF6Q0pHfs3ll_2d4Jii0_dCECVl52aoPzOI7Lc1aElhFdqesZJ-8sA7M&usqp=CAU",
      item: "5 items",
      amount: "$65",
      date: "2025-07-04 15:45",
    },
    {
      id: "ORD-104",
      address: "7/89, Rainbow Society, Surat",
      imageUri: "https://5.imimg.com/data5/YG/IP/MY-25097754/ashirwad-wheat-flour-500x500.png",
      item: "3 items",
      amount: "$28",
      date: "2025-07-06 11:00",
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5abe69" barStyle="light-content" />
      <CustomHeader title={"My Order"} header={{ height: hp("6%") }} showSearch={false} />

      <View style={styles.container}>
        <View style={styles.buttonwrap}>
          <Button
            title={"Previous"}
            wrapper={{ width: "48%" }}
            button={{
              backgroundColor: color === "Previous" ? "#6FCF97" : "#f0e8e6",
              height: hp("6%"),
              borderRadius: wp("2%"),
            }}
            buttonText={{
              color: color === "Previous" ? "white" : "black",
              fontSize: wp("4%"),
            }}
            onPress={() => setColor("Previous")}
          />

          <Button
            title={"Upcoming"}
            wrapper={{ width: "48%" }}
            button={{
              backgroundColor: color === "Upcoming" ? "#6FCF97" : "#f0e8e6",
              height: hp("6%"),
              borderRadius: wp("2%"),
            }}
            buttonText={{
              color: color === "Upcoming" ? "white" : "black",
              fontSize: wp("4%"),
            }}
            onPress={() => setColor("Upcoming")}
          />
        </View>

        <View style={{ marginTop: hp("2%") }}>
          <FlatList
            data={color === "Previous" ? orderData : upcomingOrders}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp("2%") }}
            renderItem={({ item }) => (
              <OrderCard
                OrderId={item.id}
                Address={item.address}
                imageUri={item.imageUri}
                Item={item.item}
                amount={item.amount}
                Date={item.date}
                statusType={color === "Previous" ? "previous" : "upcoming"}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("4%"),
    paddingTop: hp("1%"),
    backgroundColor: "#fff",
    flex: 1,
  },
  buttonwrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("1.5%"),
  },
});

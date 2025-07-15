import React from "react";
import { View, StyleSheet, Text, FlatList, Dimensions, ScrollView } from "react-native";
import NotificationCard from "../component/NotificationCard";
import CustomHeader from "../component/CustomHeader";

const SCREEN_WIDTH = Dimensions.get("window").width;

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: "30% Special Discount!",
      message: "Special promotion only valid today",
      icon: "percent",
      date: "today",
    },
    {
      id: 2,
      title: "Password Update Successful",
      message: "Your password update successfully",
      icon: "lock-outline",
      date: "today",
    },
    {
      id: 3,
      title: "Account Setup Successful!",
      message: "Your account has been created",
      icon: "account",
      date: "yesterday",
    },
    {
      id: 4,
      title: "Redeem your gift cart",
      message: "You have got one gift card",
      icon: "gift-outline",
      date: "yesterday",
    },

      {
      id: 5,
      title: "Redeem your gift cart",
      message: "You have got one gift card",
      icon: "gift-outline",
      date: "yesterday",
    },


     {
      id: 6,
      title: "Account Setup Successful!",
      message: "Your account has been created",
      icon: "account",
      date: "yesterday",
    },

      {
      id: 7,
      title: "Redeem your gift cart",
      message: "You have got one gift card",
      icon: "gift-outline",
      date: "yesterday",
    },

      {
      id: 8,
      title: "Redeem your gift cart",
      message: "You have got one gift card",
      icon: "gift-outline",
      date: "yesterday",
    },
  ];

  const renderSection = (label, data) => (

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{label}</Text>
      {data.map(item => (
        <NotificationCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          message={item.message}
        />
      ))}
    </View>
  );

  return (
  <View style={{flex:1}}>
<CustomHeader title="Notification"/>
  <ScrollView style={styles.container}>
      {renderSection("Today", notifications.filter(item => item.date === "today"))}
      {renderSection("Yesterday", notifications.filter(item => item.date === "yesterday"))}
    </ScrollView>

    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 12,
  },
});

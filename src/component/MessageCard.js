import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MessageCard = ({ chat, type }) => {
  const isSent = type === "sent";

  return (
   
   <View>
    <View
      style={[
        styles.card,
        {
          alignSelf: isSent ? "flex-end" : "flex-start",
          backgroundColor: isSent ? "#6FCF97" : "#F2F2F2",
        },
      ]}
    >
      <Text style={[styles.chat, { color: isSent ? "#fff" : "#000" }]}>{chat}</Text>
    </View>
      <Text style={styles.timeText}>12:30 AM</Text> 
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 10,
    maxWidth: "60%",
  },
  chat: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    textAlign: "right",
    color: "#888",
  },
});

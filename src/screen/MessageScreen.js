import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MessageCard from "../component/MessageCard";
import CustomHeader from "../component/CustomHeader";

const MessageScreen = () => {
  return (
<View style={{flex:1}}>
<CustomHeader title={"Message"} showSearch={false}/>
    <View style={styles.container}>
      <View style={styles.messagesWrap}>
        <MessageCard
          chat="Hi, can you share me your current location?"
          type="received"
        />
        <MessageCard chat="Sure, I will share with you." type="sent" />
        <MessageCard
          chat="Your location is nearby the Atlas Tower?"
          type="received"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Ionicons name="camera" size={22} color="#555" style={styles.cameraIcon} />

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Type something..."
            placeholderTextColor="#888"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesWrap: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  cameraIcon: {
    marginRight: 8,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 14,
    color: "#333",
    paddingVertical: 10,
  },
  sendButton: {
    backgroundColor: "#55C364",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

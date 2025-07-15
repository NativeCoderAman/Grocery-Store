import React from "react";
import { Text, TouchableOpacity, StyleSheet, View ,} from "react-native";

const Button = ({ title, onPress, showForgot, onForgotPress,wrapper, button,buttonText }) => {

  
  return (
    <View style={[styles.wrapper, wrapper]}>
      {showForgot && (
        <TouchableOpacity onPress={onForgotPress}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={[styles.button, button]} onPress={onPress}>
        <Text style={[styles.buttonText,buttonText ]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "#6FCF97",
    fontSize: 13,
    marginBottom: 8,
    marginRight: 10,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#6FCF97",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

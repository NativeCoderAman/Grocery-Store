import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Input = ({ placeholder, isPassword, showSearchIcon, inputStyle, inputWrapper, onChangeText, onSubmitEditing, label }) => {
  const [secureText, setSecureText] = useState(isPassword);



  return (
    <View style={styles.container}>


      <View style={[styles.inputWrapper, inputWrapper]}>

        {showSearchIcon && (
          <MaterialCommunityIcons
            name="magnify"
            size={24}
            color="black"
            style={styles.icon}
          />
        )}

        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureText}
          placeholderTextColor="gray"
          onSubmitEditing={onSubmitEditing}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <MaterialCommunityIcons
              name={secureText ? "eye-off" : "eye"}
              size={22}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp('2.2%'),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('85%'),
    height: hp('6%'),
    borderWidth: 0.5,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('4%'),

  },
  input: {
    flex: 1,
    color: "black",
        fontSize: wp('4%')
  },
  icon: {
    marginLeft: wp('2%'),
  },
  label: {
    fontSize: wp('3.8%'),
    color: "#4CAF50", 
   marginBottom: hp('1%'),
    marginLeft: wp('2%'),
  fontWeight: '600'
}
});

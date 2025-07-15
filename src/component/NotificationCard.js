import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotificationCard = ({ icon = "percent", title, message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name={icon} size={wp("6%")} color="#fff" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: wp('4%'),
    borderRadius: wp('3%'),
    marginVertical: hp('1%'),
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  iconCircle: {
    backgroundColor: '#55C364',
    borderRadius: wp('10%'),
    width: wp('12%'),
    height: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp('4.2%'),
    color: '#000',
  },
  message: {
    color: 'gray',
    fontSize: wp('3.5%'),
    marginTop: hp('0.5%'),
  },
});

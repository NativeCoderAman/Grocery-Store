import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const CatCard = ({ image, title }) => {
  const navigation=useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate("SubCategoryScreen")}  style={styles.touchable}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default CatCard;

const styles = StyleSheet.create({



  card: {
    // width: 80,
    // height:100,   
     width: wp('20%'),
    height: hp('12%'),        
    backgroundColor: '#fff',
    borderRadius:  wp('2.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('2%'),
    marginBottom:  hp('1.3%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    // marginTop:10,
  },
  image: {
     width: wp('10%'),
    height: wp('10%'),
    marginBottom: hp('1%'),
  },
  title: {
    fontSize: wp('3.1%'),
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },

  touchable: {
  alignItems: 'center',
  justifyContent: 'center',
}


});

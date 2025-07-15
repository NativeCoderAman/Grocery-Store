import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Input from '../component/Input';
import Button from './Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CreditCardForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/196/196561.png' }}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Credit/Debit Card</Text>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Card Number</Text>
        <Input
          placeholder="2358 6589 8748 3598"
          keyboardType="number-pad"
         
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Card Holder Name</Text>
        <Input
          style={styles.input}
          placeholder="Smith Watson"
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.inputBox, { flex: 1, }]}>
          <Text style={styles.label}>Expiry Date</Text>
          <Input
            style={styles.input}
            placeholder="09/22"
            keyboardType="numeric"
             inputWrapper={{width:wp("45%")}}
          />
        </View>

        <View style={[styles.inputBox, { flex: 1, marginLeft: wp("13%") }]}>
          <Text style={styles.label}>CVV</Text>
          <Input
            inputStyle={{
               
            }}

            inputWrapper={{
                width:139
            }}
            placeholder="149"
            secureTextEntry={true}
            keyboardType="number-pad"
          />

        </View>
        
      </View>
      
    </View>
    
  );
};

export default CreditCardForm;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#6FCF97',
    borderRadius: 12,
    padding: wp("2%"),
    backgroundColor: '#fff',
    margin: wp("1%"),
    elevation: 2,
    marginTop:hp("1%")
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp("2%"),
  },
  logo: {
     width: wp('6%'),
    height: wp('6%'),
    marginRight: wp('2%'),
  },
  headerText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  inputBox: {
     marginBottom: hp('1%'),

  },
  label: {
    color: '#6FCF97',
    marginBottom: 2,
    fontSize: wp("4%"),
    fontWeight: '500',
    
  },

  row: {
    flexDirection: 'row',
  },
});

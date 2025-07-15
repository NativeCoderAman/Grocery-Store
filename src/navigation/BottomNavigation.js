import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import CartScreen from '../screen/CartScreen';
import LikeScreen from '../screen/LikeScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? hp('8%') : hp('7%'),
          paddingBottom: Platform.OS === 'ios' ? hp('2%') : hp('1%'),
          paddingTop: hp('1%'),
          backgroundColor: '#fff',
          borderTopLeftRadius: wp('5%'),
          borderTopRightRadius: wp('5%'),
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -3 },
          shadowRadius: 10,
        },
        tabBarActiveTintColor: '#54B661',
        tabBarInactiveTintColor: '#ccc',
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="home" size={wp('5.5%')} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='LikeScreen'
        component={LikeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="heart-outlined" size={wp('5.5%')} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bag" size={wp('5.5%')} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={wp('5.5%')} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

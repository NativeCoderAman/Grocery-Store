
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import WelcomeScreen from './src/screen/WelcomeScreen';
import WithUs from './src/screen/WithUs';
import SkipButton from './src/component/SkipButton';
import LoginScreen from './src/screen/Authication/LoginScreen';
import SingupScreen from './src/screen/Authication/SingupScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import HomeScreen from './src/screen/HomeScreen';
import BestDealScreen from './src/screen/BestDealScreen';
import SearchScreen from './src/screen/SearchScree';
import SubCategoryScreen from './src/screen/SubCategory';
import DeatilsScreen from './src/screen/DeatilsScreen';
import LocationScreen from './src/screen/LocationScreen';
import CheckOut from './src/screen/CheckOut';
import CouponScreen from './src/screen/CouponScreen';
import PayementScreen from './src/screen/PayementScreen';
import CheckoutPay from './src/screen/CheckoutPay';
import OrderScreen from './src/screen/OrderScreen';
import OrderCard from './src/component/OrderCard';
import MessageScreen from './src/screen/MessageScreen';
import RiderScreen from './src/screen/RiderScreen';
import NottifactionScreen from './src/screen/NotifactionScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import EditProfileScreen from './src/screen/EditProfileScreen';
import TearmsScreen from './src/screen/TearmsScreen';

function App() {

  const [ShowWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 1000)
  })


  return (

    // <WelcomeScreen/>
    // <WithUs/>
    // <SkipButton />
    // <LoginScreen/>
    // <SingupScreen/>
    // <HomeScreen />
    // <BestDealScreen/>
    // <SearchScreen/>
    // <SubCategoryScreen/>
    // <DeatilsScreen/>
    // <LocationScreen/>
    //  <CheckOut/>
    // <CouponScreen/>
    //<CheckOut/>  
    //<PayementScreen/>
    //<CheckoutPay/>
    // <OrderScreen/>
    // <MessageScreen/>
    // <RiderScreen/>
    // <NottifactionScreen/>
    // <ProfileScreen/>
    // <EditProfileScreen/>
    // <TearmsScreen/>

    // (
    //   ShowWelcomeScreen ? <WelcomeScreen/> : <WithUs/>
    // )


    <SafeAreaView style={{ flex: 1 }}>

      <StatusBar
        backgroundColor={"#6FCF97"}
        barStyle="light-content"

      />

      <NavigationContainer>
        {ShowWelcomeScreen ? <WelcomeScreen /> : <StackNavigation />}
      </NavigationContainer>
    </SafeAreaView>




  );
}



export default App;

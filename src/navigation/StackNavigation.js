import React from 'react'
import { View } from 'react-native'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/Authication/LoginScreen'
import SingupScreen from '../screen/Authication/SingupScreen'
import WithUs from '../screen/WithUs'
import HomeScreen from '../screen/HomeScreen'
import BottomNavigation from './BottomNavigation'
import SubCategory from '../screen/SubCategory'
import SubCategoryScreen from '../screen/SubCategory'
import BestDealScreen from '../screen/BestDealScreen'
import SearchScreen from '../screen/SearchScree'
import LikeScreen from '../screen/LikeScreen'
import CustomHeader from '../component/CustomHeader'
import ProductDetailsScreen from '../screen/DeatilsScreen'
import EditProfileScreen from '../screen/EditProfileScreen'
import CouponScreen from '../screen/CouponScreen'
import CheckOut from '../screen/CheckOut'
import PayementScreen from '../screen/PayementScreen'
import RiderScreen from '../screen/RiderScreen'
import OrderScreen from '../screen/OrderScreen'
import MessageScreen from '../screen/MessageScreen'
import NotificationScreen from '../screen/NotifactionScreen'
import TearmsScreen from '../screen/TearmsScreen'
import TrialScreen from '../screen/TrialScreen'

const StackNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName='WithUs' screenOptions={{ headerShown: false }}>

            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name='BestDealScreen' component={BestDealScreen} />
            <Stack.Screen name='SubCategoryScreen' component={SubCategoryScreen} />
            <Stack.Screen name='HomeScreen' component={BottomNavigation} />
            <Stack.Screen name='WithUs' component={WithUs} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SingupScreen' component={SingupScreen} />
            <Stack.Screen name='LikeScreen' component={LikeScreen} />
            <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
            <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />
            <Stack.Screen name='CouponScreen' component={CouponScreen} />
            <Stack.Screen name='PayementScreen' component={PayementScreen} />
            <Stack.Screen name='RiderScreen' component={RiderScreen} />
            <Stack.Screen name='MessageScreen' component={MessageScreen} />
            <Stack.Screen name='OrderScreen' component={OrderScreen} />
            <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
            <Stack.Screen name='TearmsScreen' component={TearmsScreen} />
                        <Stack.Screen name='TrialScreen' component={TrialScreen} />
                        


        </Stack.Navigator>
    )
}

export default StackNavigation;

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Color from '../Assets/Colors'
import HomeScreen from '../Screens/HomeScreen';
import InboxScreen from '../Screens/ButtonTabs/InboxScreen';
import BasketScreen from '../Screens/ButtonTabs/BasketScreen';
import AccountScreen from '../Screens/ButtonTabs/AccountSccreen';
import MoreScreen from '../Screens/ButtonTabs/MoreScreen';
import BottomNavigation from './BottomNavigation';
import AllRestaurant from '../Components/Restaurant/AllRestaurant';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import RestaurantDetailScreen from '../Screens/RestaurantDetailScreen';
import SignUpScreen from '../Screens/Account/SignUpScreen';
import SignInScreen from '../Screens/Account/SignInScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import GroceriesDetailScreen from '../Screens/GroceriesDetailScreen';
import BakeryDetailScreen from '../Screens/BakeryDetailScreen';
import Login from '../Screens/Account/Login';
import Register from '../Screens/Account/Register';



const Stack =createStackNavigator();

const HomeNavigation =()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Restaurant' component={AllRestaurant} />
                <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetailScreen} />
                <Stack.Screen name='GroceryDetail' component={GroceriesDetailScreen} />
                <Stack.Screen name='BakeryDetail' component={BakeryDetailScreen} />
            </Stack.Navigator>
    )
}
const InboxNavigation =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Inbox' component={InboxScreen}/>
        </Stack.Navigator>
    )
}

const BasketNavigation =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Basket' component={BasketScreen}/>
        </Stack.Navigator>
    )
}

const ProfileNavigation =()=>{
    return(
        <Stack.Navigator >

            {/*<Stack.Screen name='Login' component={Login}/>*/}
            {/*<Stack.Screen name='Register' component={Register}/>*/}

            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='Profile' component={ProfileScreen}/>

        </Stack.Navigator>
    )
}

const MoreNavigation =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='More' component={MoreScreen}/>
        </Stack.Navigator>
    )
}




export {HomeNavigation,InboxNavigation,BasketNavigation,ProfileNavigation,MoreNavigation};

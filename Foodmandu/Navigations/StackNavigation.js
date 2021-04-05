
import React from 'react';
import {Button,Text,View} from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';
import Color from '../Assets/Colors'
import HomeScreen from '../Screens/HomeScreen';
import InboxScreen from '../Screens/ButtonTabs/InboxScreen';
import BasketScreen from '../Screens/ButtonTabs/BasketScreen';
import AccountScreen from '../Screens/ButtonTabs/AccountSccreen';
import MoreScreen from '../Screens/ButtonTabs/MoreScreen';
import BottomNavigation from './BottomNavigation';
import AllRestaurant from '../Components/CategoryProductList/AllRestaurant';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import RestaurantDetailScreen from '../Screens/RestaurantDetailScreen';
import SignUpScreen from '../Screens/Account/SignUpScreen';
import SignInScreen from '../Screens/Account/SignInScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import GroceriesDetailScreen from '../Screens/GroceriesDetailScreen';
import BakeryDetailScreen from '../Screens/BakeryDetailScreen';
import Login from '../Screens/Account/Login';
import Register from '../Screens/Account/Register';
import AuthContext from '../Store/Context/AuthContext';
import SplashScreen from '../Screens/Account/SplashScreen';
import EditScreen from '../Screens/EditScreen';
import AllGroceries from '../Components/CategoryProductList/AllGroceries';
import AllBakeries from '../Components/CategoryProductList/AllBakeries';
import AddRestaurant from '../Components/AddProductScreens/AddRestaurant';



const Stack =createStackNavigator();

const HomeNavigation =()=>{
    return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name='Restaurant' component={AllRestaurant}/>
                <Stack.Screen name='Groceries' component={AllGroceries} />
                <Stack.Screen name='Bakeries' component={AllBakeries} />

                <Stack.Screen name='AddRestaurant' component={AddRestaurant} />

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
//----------------------------------------------------------------------------
const ProfileNavigation =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={ProfileScreen}/>
            <Stack.Screen name='Edit' component={EditScreen}/>

        </Stack.Navigator>
    )
}

const LoginAndRegisterNavigation =()=>{
    return(
        <Stack.Navigator >

            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>

            {/*<Stack.Screen name='SignIn' component={SignInScreen}/>*/}
            {/*<Stack.Screen name='SignUp' component={SignUpScreen}/>*/}
            {/*<Stack.Screen name='Profile' component={ProfileScreen}/>*/}

        </Stack.Navigator>
    )
};


const AccountNavigation =()=>{
    return(

            <AuthContext.Consumer>
                {
                    (context)=>{
                        if (context.isAuthenticating){
                             <SplashScreen/>
                        }
                        return !context.isAuthenticated ? <LoginAndRegisterNavigation/> :<ProfileNavigation/>
                    }
                }
            </AuthContext.Consumer>
    )
};

//----------------------------------------------------------------------------------------------

const MoreNavigation =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='More' component={MoreScreen}/>
        </Stack.Navigator>
    )
}




export {HomeNavigation,InboxNavigation,ProfileNavigation,BasketNavigation,LoginAndRegisterNavigation,AccountNavigation,MoreNavigation};

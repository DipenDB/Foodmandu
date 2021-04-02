import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthProvider from '../Store/Provider/AuthProvider';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Navigations =()=>{
    return(

        <AuthProvider>
            <NavigationContainer>
                <BottomNavigation/>
            </NavigationContainer>
        </AuthProvider>

    )
}
export default Navigations;

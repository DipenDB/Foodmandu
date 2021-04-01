import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Navigations =()=>{
    return(
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>

    )
}
export default Navigations;

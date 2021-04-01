

import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { TextInput ,Button } from 'react-native-paper';
import Color from '../../Assets/Colors'
import SignInScreen from '../Account/SignInScreen';
import ProfileScreen from '../ProfileScreen';
import {ProfileNavigation} from '../../Navigations/StackNavigation';


const AccountScreen=(props)=>{
    const isAuthenticated =true;

    return(
        <ProfileNavigation>
            {
                !isAuthenticated ? <ProfileScreen/>:<SignInScreen/>
            }
        </ProfileNavigation>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical:30,
        paddingHorizontal:20,
    },
});


export default AccountScreen;




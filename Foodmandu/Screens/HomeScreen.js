

import React from 'react';
import {View,Text,StyleSheet,StatusBar,Image,ScrollView} from 'react-native';
import { Avatar,Searchbar  } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../Assets/Colors'
import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import AroundTheGlobe from '../Components/AroundTheGlobe';
import DifferentRestaurant from '../Components/DifferentRestaurant';
import Grocery from '../Components/Grocery';
import Bakery from '../Components/Bakery';
import ImagePractice from '../Components/Image';


const HomeScreen=(props)=>{


    return(
        <View style={styles.container}>

            <Navbar/>
            <ScrollView>
                <Category {...props}/>

                <AroundTheGlobe {...props}/>

                <DifferentRestaurant {...props}/>

                <Grocery {...props}/>

                <Bakery {...props}/>
            </ScrollView>





        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.whiteBlack,
    },
    title:{
        fontSize:30,
        fontFamily:'Ubuntu-Bold'
    },

});


export default HomeScreen;




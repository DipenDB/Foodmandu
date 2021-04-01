

import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import Color from '../Assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../MyApp/Assets/Colors';


const Navbar=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View>
                    <Text style={styles.title}>FOODMANDU</Text>
                    <Text style={styles.subTitle}>Bbasundhara,Kathmandu 44600, Nepal</Text>
                </View>

                <View style={styles.search}>
                    <Icon name="search" size={25} color={Colors.secondary} />
                </View>

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
    },
    title:{
        fontFamily:'Ubuntu-Bold',
        fontSize:25,
    },
    subTitle:{
        fontFamily:'Ubuntu-Regular',
        fontSize:14,
        color:Color.green,
    },
    navbar:{
        margin:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

});


export default Navbar;




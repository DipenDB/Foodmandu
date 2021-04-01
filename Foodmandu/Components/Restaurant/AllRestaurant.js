

import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Color from '../../Assets/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../MyApp/Assets/Colors';
import {CATEGORY} from '../../Assets/Constant/Category';
import {Restaurant} from '../../Assets/Constant/Resturant';


const renderItem =({item})=>{
    return(
        <View style={styles.box}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.img,
                    }}
                />


                <View style={{marginLeft:10,}}>
                    <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.subTitle} numberOfLines={1}>{item.neighborhood} City</Text>
                    <Text style={styles.subTitle} numberOfLines={2}><Text style={{color:'blue'}}>{item.address}</Text></Text>
                    <Text style={styles.subTitle} numberOfLines={1}>Opening :<Text style={{color:'green'}}>{item.opening_time}</Text></Text>
                </View>


            </View>
        </View>
    )
}


const AllRestaurant=(props)=>{
    return(
        <View style={styles.container}>

            <FlatList
                data={Restaurant}
                // horizontal
                 showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.whiteBlack,
        margin:5,
    },
    box:{
        backgroundColor: '#fff',
        height:150,
        width:'100%',
        padding:10,
        // overflow:'hidden',
        marginBottom:5,
    },
    image:{
        width: 130,
        height: 130
    },
    title:{
        fontFamily:'Ubuntu-Bold',
        fontSize:18,
    },
    subTitle:{
        fontFamily:'Ubuntu-Regular',
        fontSize:15,
    },
});


export default AllRestaurant;






import React from 'react';
import {View, Text, StyleSheet, FlatList, Image,TouchableOpacity} from 'react-native';
import {GROCERY} from '../Assets/Constant/Grocery';
import Color from '../Assets/Colors';
import {BAKERY} from '../Assets/Constant/Bakery';




const Bakery=(props)=>{

    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('BakeryDetail',{name:item.title})} style={styles.card}>
                <Image
                    style={styles.cardImage}
                    source={item.images}
                />
                <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                    <View style={{flex:3}}>
                        <Text numberOfLines={1} style={styles.title}>{item.title} </Text>
                        <Text numberOfLines={2} style={styles.subTitle}>{item.description}</Text>
                    </View>

                    <View style={{flex:0.9}}>
                        <Text style={{textAlign: 'right',fontFamily:'Ubuntu-Bold',color:Color.red}}>$ {item.price}</Text>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }





    return(
        <View style={styles.container}>
            <Text style={styles.headingTitle}>Bakery Item</Text>

            <FlatList
                data={BAKERY}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderItem}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:3,
        backgroundColor: '#fff',
        paddingTop:20,
        paddingLeft:20,
        paddingBottom:20,

    },
    card:{
        height:250,
        width:300,
        backgroundColor: Color.whiteBlack,
        overflow:'hidden',
        borderRadius:10,
        marginRight:20,
    },
    cardImage:{
        height: 180,
        width: 300,
        resizeMode: 'cover'
    },
    headingTitle:{
        fontFamily:'Ubuntu-Bold',
        fontSize:25,
        marginBottom:10,
        color:Color.secondary
    },
    title:{
        fontFamily:'Ubuntu-Bold',
        fontSize:16,
        textTransform: 'capitalize'
    },
    subTitle:{
        fontFamily:'Ubuntu-Regular',
        fontSize:13,
        textTransform: 'capitalize'
    },
});


export default Bakery;




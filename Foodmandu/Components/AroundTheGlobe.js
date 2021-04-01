

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList} from 'react-native';

import Color from '../Assets/Colors';
import {CATEGORY} from '../Assets/Constant/Category';
import {DATA} from '../Assets/Constant/Data';
import {TouchableOpacity} from 'react-native-gesture-handler';



const AroundTheGlobe=(props)=>{

    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('ProductDetail',{name:item.name})} style={styles.card}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: item.imageURL,
                    }}
                />
                <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                    <View style={{flex:3}}>
                        <Text numberOfLines={1} style={styles.title}>{item.name} </Text>
                        <Text numberOfLines={2} style={styles.subTitle}>{item.description}</Text>
                    </View>

                    <View style={{flex:0.9}}>
                        <Text style={{textAlign: 'right',fontFamily:'Ubuntu-Bold',color:Color.red}}>{item.price}</Text>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }



    return(
        <View style={styles.container}>

            <Text style={styles.headingTitle}>Around The Globe</Text>


            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name}
                renderItem={renderItem}
            />






        </View>

    )
}

const styles = StyleSheet.create({
     container:{
        marginTop:4,
        // flex: 1,
        backgroundColor: '#fff',
        paddingLeft:20,
        paddingTop:20,
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
    },
    subTitle:{
        fontFamily:'Ubuntu-Regular',
        fontSize:13,
    },

});


export default AroundTheGlobe;




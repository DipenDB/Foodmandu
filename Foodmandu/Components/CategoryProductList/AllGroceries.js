


import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList} from 'react-native';
import {Restaurant} from '../../Assets/Constant/Resturant';
import Color from '../../Assets/Colors';
import {GROCERY} from '../../Assets/Constant/Grocery';

const AllGroceries=(props)=>{
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "All Groceries"})})

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
                        <Text style={[styles.title,{textTransform: 'capitalize'}]} numberOfLines={1}>{item.item}</Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={1}><Text style={{fontWeight:'bold'}}>Brand :</Text> {item.brand}</Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={2}><Text style={{color:'blue'}}><Text style={{fontWeight:'bold'}}>Category :</Text>{item.category}</Text></Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={1}><Text style={{color:'green'}}><Text style={{fontWeight:'bold'}}>Available Quantity :</Text>{item.qty}</Text></Text>
                    </View>


                </View>
            </View>
        )
    }




    return(
        <View style={styles.container}>

            <FlatList
                data={GROCERY}
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


export default AllGroceries;




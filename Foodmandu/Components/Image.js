

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList} from 'react-native';
import {GROCERY} from '../Assets/Constant/Grocery';
import {IMG} from '../Assets/Constant/ImageData';


const renderItem=({item})=>{
    return(
        <Image
            style={{height:250,width:300}}
            source={item.img}
            source={require('../Assets/Constant/public/images/red-velvet-chocolate-cake.png')}
        />
    )
}

const ImagePractice=()=>{
    return(
        <View style={styles.container}>

            <FlatList
                data={IMG}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ImagePractice;




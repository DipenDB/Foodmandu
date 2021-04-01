

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import {GROCERY} from '../Assets/Constant/Grocery';
import Color from '../Assets/Colors'

const GroceriesDetailScreen=(props)=>{

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: props.route.params.name.toUpperCase()})})

    const selectedProduct = GROCERY.find(data=>data.item === props.route.params.name)

    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: selectedProduct.img,
                    }}
                />
            </View>

            <View style={{padding:20,}}>
                <Text style={{fontFamily:'Ubuntu-Bold',fontSize:19,marginBottom:10,}}>{selectedProduct.item.toUpperCase()}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16, fontWeight:'bold', marginBottom:10,}}>Category : <Text style={{textTransform: 'capitalize'}}>{selectedProduct.category}</Text></Text>
                <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Brand : <Text style={{textTransform: 'capitalize'}}>{selectedProduct.brand}</Text></Text>
                <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Available : <Text style={{}}>{selectedProduct.qty}</Text></Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.whiteBlack,
    },
    image:{
        // marginTop:10,
        width:Dimensions.get('window').width,
        height:250,
    },
});


export default GroceriesDetailScreen;




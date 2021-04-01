

import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions } from 'react-native';
import {DATA} from '../Assets/Constant/Data';
import Color from '../Assets/Colors'
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../../MyApp/Assets/Colors';



const ProductDetailScreen=(props)=>{

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: props.route.params.name})})

    const selectedProduct = DATA.find(data=>data.name === props.route.params.name)


    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: selectedProduct.imageURL,
                    }}
                />
            </View>

            <View style={{padding:20,}}>
                <Text style={{fontFamily:'Ubuntu-Bold',fontSize:19,marginBottom:10,}}>{props.route.params.name}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.red,fontSize:16,marginBottom:10,}}>{selectedProduct.price}</Text>
                <Text numberOfLines={2}>{selectedProduct.description}</Text>

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


export default ProductDetailScreen;




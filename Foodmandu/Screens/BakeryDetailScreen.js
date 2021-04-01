

import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image, Dimensions,ScrollView} from 'react-native';
import {BAKERY} from '../Assets/Constant/Bakery';
import Color from '../Assets/Colors';

const BakeryDetailScreen=(props)=>{
    const selectedBakery = BAKERY.find(data=>data.title === props.route.params.name)

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: selectedBakery.title})})



    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        source={selectedBakery.images}
                    />
                </View>

                <View style={{padding:20,}}>
                    <Text style={{fontFamily:'Ubuntu-Bold',fontSize:19,marginBottom:10,}}>{selectedBakery.title.toUpperCase()}</Text>
                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Brand : <Text style={{textTransform: 'capitalize',fontWeight:'regular'}}>{selectedBakery.brand}</Text></Text>
                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Category : <Text style={{fontWeight:'regular'}}>{selectedBakery.category}</Text></Text>
                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Manufacture Date : <Text style={{fontWeight:'regular'}}>{selectedBakery.mfdDate}</Text></Text>
                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Expiry Date : <Text style={{fontWeight:'regular'}}>{selectedBakery.expDate}</Text></Text>
                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.black,fontSize:16,fontWeight:'bold',marginBottom:10,}}>Price : <Text style={{fontWeight:'bold',color:Color.red,}}>$ {selectedBakery.price}</Text></Text>

                    <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.secondary,opacity:0.5,fontSize:16, fontWeight:'bold', marginBottom:10,}}><Text style={{textTransform: 'capitalize'}}>{selectedBakery.description}</Text></Text>

                </View>

            </ScrollView>

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


export default BakeryDetailScreen;






import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, FlatList} from 'react-native';
import Color from '../Assets/Colors';
import {Restaurant} from '../Assets/Constant/Resturant';
import {CATEGORY} from '../Assets/Constant/Category';

const RestaurantDetailScreen=(props)=>{
    const selectedRestaurant = Restaurant.find(data=>data.id === props.route.params.id)

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: selectedRestaurant.name})})


    const renderReviews=({item})=>{
        return(
            <View style={{width: '100%',backgroundColor: 'white',marginTop: 10, padding:10,}}>
                <Text style={{fontFamily:'Ubuntu-Bold',fontSize:18,color:Color.lightPrimary}}>{item.name}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular',fontSize:15,color:Color.black}}>{item.comments}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular',fontSize:15,color:Color.green}}>{item.date}</Text>
            </View>
        )
    }


    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: selectedRestaurant.img,
                    }}
                />
            </View>

            <View style={{padding:20,}}>
                <Text style={{fontFamily:'Ubuntu-Bold',fontSize:19,marginBottom:10,}}>{selectedRestaurant.name}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular' ,color:Color.red,fontSize:16,marginBottom:10,}}>{selectedRestaurant.address}</Text>
                {/*<Text numberOfLines={2}>{selectedRestaurant.address}</Text>*/}
            </View>


            <FlatList
                data={selectedRestaurant.reviews}
                // horizontal
                // showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name}
                renderItem={renderReviews}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.whiteBlack,

    },
    image:{
        marginTop:10,
        width:Dimensions.get('window').width,
        height:250,
    },
});


export default RestaurantDetailScreen;




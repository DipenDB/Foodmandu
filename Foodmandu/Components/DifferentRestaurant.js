
import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Color from '../Assets/Colors';
import {DATA} from '../Assets/Constant/Data';
import {Restaurant} from '../Assets/Constant/Resturant';
import {TouchableOpacity} from 'react-native-gesture-handler';



const DifferentRestaurant=(props)=>{

    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('RestaurantDetail',{id:item.id})} style={{marginRight:10,alignItems:'center',justifyContent:"center"}}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}

                        source={{
                            uri: item.img,
                        }}
                    />
                    {/*<Image style={styles.image} source={require(item.photograph)} />*/}
                </View>
                <View style={{marginTop: 10,}}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={{width:110,textAlign:'center',fontFamily: 'Ubuntu-Bold'}}>{item.name}</Text>
                    <Text numberOfLines={1} style={{textAlign:'center',fontFamily: 'Ubuntu-Regular'}}>{item.cuisine_type}</Text>
                </View>

            </TouchableOpacity>
        )
    }





    return(
        <View style={styles.container}>
            <Text style={styles.headingTitle}>Different Restaurant</Text>

            <FlatList
                data={Restaurant}
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
        marginTop:3,
        backgroundColor: '#fff',
        paddingTop:20,
        paddingLeft:20,
        paddingBottom:20,

    },
    card:{
        height:120,
        width:120,
        backgroundColor: 'blue',

        borderRadius:15,
        overflow:'hidden'
    },
    headingTitle:{
        fontFamily:'Ubuntu-Bold',
        fontSize:25,
        marginBottom:10,
        color:Color.secondary
    },
    image:{
        height:120,
        width:120,
    },
});


export default DifferentRestaurant;




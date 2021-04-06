


import React, {useContext} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity} from 'react-native';
import {Restaurant} from '../../Assets/Constant/Resturant';
import Color from '../../Assets/Colors';
import {GROCERY} from '../../Assets/Constant/Grocery';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../MyApp/Assets/Colors';
import AuthContext from '../../Store/Context/AuthContext';

const AllGroceries=(props)=>{
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "All Groceries"})})
    const authContext =useContext(AuthContext)

    const renderItem =({item})=>{
        return(
            <View style={styles.box}>
                <View style={{flexDirection:'row'}}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.image,
                        }}
                    />


                    <View style={{marginLeft:10,}}>
                        <Text style={[styles.title,{textTransform: 'capitalize'}]} numberOfLines={1}>{item.name}</Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={1}><Text style={{fontWeight:'bold'}}>Brand :</Text> {item.type}</Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={2}><Text style={{color:'blue'}}><Text style={{fontWeight:'bold'}}>Category :</Text>{item.category}</Text></Text>
                        <Text style={[styles.subTitle,{textTransform: 'capitalize'}]} numberOfLines={1}><Text style={{color:'green'}}><Text style={{fontWeight:'bold'}}>Available Quantity :</Text>{item.availableQuantity}</Text></Text>
                    </View>


                </View>
            </View>
        )
    }




    return(
        <View style={styles.container}>

            <FlatList
                data={authContext.allGroceries}
                // horizontal
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />

            <TouchableOpacity onPress={()=>props.navigation.navigate('AddGroceries')} style={styles.floatingButton}>
                <Icon name="plus" size={30} color={Colors.white} />
            </TouchableOpacity>

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
    floatingButton:{
        height:60,
        width:60,
        borderRadius:35,
        backgroundColor:Color.red,
        position:'absolute',
        bottom:30,
        right:20,

        alignItems:'center',
        justifyContent:'center',

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






import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native';
import Color from '../../Assets/Colors'
import Colors from '../../../MyApp/Assets/Colors';
import {CATEGORY} from '../../Assets/Constant/Category';
import {Restaurant} from '../../Assets/Constant/Resturant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import AuthContext from '../../Store/Context/AuthContext';



const AllRestaurant=(props)=>{
    const authContext =useContext(AuthContext)
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "All Restaurant"})})




    const renderItem =({item})=>{
        return(
            <Swipeable renderRightActions={()=>(
                <TouchableOpacity style={{backgroundColor:Color.red,width:80,alignItems: 'center',justifyContent: 'center'}}>
                    <Icon2 name="delete" size={45} color={Colors.white} />
                </TouchableOpacity>
            )}>
                <View style={styles.box}>

                        <View style={{flexDirection:'row'}}>
                            <Image
                                style={styles.image}
                                source={{
                                    // uri: item.img,
                                    uri: item.image,
                                }}
                            />


                            <View style={{marginLeft:10,}}>
                                <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                                <Text style={styles.subTitle} numberOfLines={1}>{item.city} City</Text>
                                <Text style={styles.subTitle} numberOfLines={2}><Text style={{color:'blue'}}>{item.address}</Text></Text>
                                <Text style={styles.subTitle} numberOfLines={1}>Opening :<Text style={{color:'green'}}>{item.opening}</Text></Text>
                            </View>


                        </View>
                </View>
            </Swipeable>


        )
    }




    return(
        <View style={styles.container}>



            <FlatList
                data={authContext.allRestaurant}
                // horizontal
                 showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity onPress={()=>props.navigation.navigate('AddRestaurant')} style={styles.floatingButton}>
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


export default AllRestaurant;




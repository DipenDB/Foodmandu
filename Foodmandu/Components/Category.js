

import React from 'react';
import {View,Text,StyleSheet,Image,FlatList} from 'react-native';
import {CATEGORY} from '../Assets/Constant/Category';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Category=(props)=>{

    const renderItem =({item})=>{

        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate(item.nav)}>
                <View style={{alignItems: 'center',justifyContent: 'center',marginRight:20,}}>
                    <View style={[styles.categoryCircle,{backgroundColor:item.color}]}>
                        <Image
                            style={{height:50,width:50}}
                            source={item.img}
                        />
                    </View>

                    <View style={{marginTop: 10,}}>
                        <Text style={{fontFamily:'Ubuntu-Medium',opacity:0.5}}>{item.category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }







    return(
        <View style={styles.container}>



            <FlatList
                data={CATEGORY}
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
        marginTop:2,
        // flex: 1,
        backgroundColor: '#fff',
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:20,
    },
    categoryCircle:{
        // backgroundColor: 'green',
        height:90,
        width:90,
        borderRadius:45,
        // opacity:0.1,
        zIndex:0,
        elevation:0.7,
        // position: 'relative'

        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height: 80,
        width: 80,
        // zIndex:0,
    },

});


export default Category;




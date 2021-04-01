

import React from 'react';
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import { Avatar,Searchbar  } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Assets/Colors'
const HomePage=()=>{
    const [searchQuery, setSearchQuery] = React.useState('');




    return(
        <View style={styles.container}>
            {/*------------------------------Top Profile---------------------------------------------*/}
            <View style={{backgroundColor: Colors.primary,borderBottomLeftRadius:10, borderBottomRightRadius:10,}}>
                <View style={{margin:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20,}}>
                    <View style={{flexDirection:'row'}}>
                        <Avatar.Image size={50} source={{uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frachelkramerbussel%2Ffiles%2F2019%2F02%2Fjonah-larson-eleven-year-old-book-deal-hello-crochet-friends-1200x1099.jpg'}} />
                        <View style={{marginLeft:10}}>
                            <Text style={styles.title}>Dipen DB</Text>
                            <Text style={styles.subTitle}>Graduates from TU</Text>
                        </View>
                    </View>

                    <View>
                        <Icon name="notifications-active" size={30} color={Colors.white} />
                    </View>
                </View>
            </View>

            {/*--------------------------Search-----------------------------------------------------------*/}

            <View style={{margin:10,}}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={(text)=>setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>

            {/* ----------------------------Category--------------------------------------------   */}
            <View style={{margin:10}}>
                <Text style={[styles.title,{color:Colors.secondary}]} >Category</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://www.pngkey.com/png/full/117-1175473_box-icon-product-release-release-icon.png',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://www.pngkey.com/png/full/117-1175473_box-icon-product-release-release-icon.png',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://www.pngkey.com/png/full/117-1175473_box-icon-product-release-release-icon.png',
                    }}
                />

            </View>



            {/* ----------------------------Todos--------------------------------------------   */}
            <View style={{margin:10}}>
                <Text style={[styles.title,{color:Colors.secondary}]} >Todos</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://icon-library.com/images/todo-icon/todo-icon-7.jpg',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://icon-library.com/images/todo-icon/todo-icon-7.jpg',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://icon-library.com/images/todo-icon/todo-icon-7.jpg',
                    }}
                />

            </View>

            {/* ----------------------------Top Product--------------------------------------------   */}
            <View style={{margin:10}}>
                <Text style={[styles.title,{color:Colors.secondary}]} >Top Product</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://wirawoodcarver.com/wp-content/uploads/2019/07/product.png',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://wirawoodcarver.com/wp-content/uploads/2019/07/product.png',
                    }}
                />
                <Image
                    style={styles.card}
                    source={{
                        uri: 'https://wirawoodcarver.com/wp-content/uploads/2019/07/product.png',
                    }}
                />

            </View>









        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    card:{
        height:150,
        width:140,
        marginLeft:5,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.white,
    },
    subTitle:{
        fontSize: 13,
        color:Colors.white,
    },
});


export default HomePage;




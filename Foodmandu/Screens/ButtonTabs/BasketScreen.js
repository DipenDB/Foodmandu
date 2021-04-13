

import React, {useEffect} from 'react';
import {View,StyleSheet,StatusBar,Image,TouchableOpacity,FlatList} from 'react-native';
import { Container, Header, Button, Content,Root , ActionSheet, Text } from "native-base";
import * as ImagePicker from 'react-native-image-picker'


const BasketScreen=()=>{

    const [selectedImage,setSelectedImage] = React.useState([])
    console.log(selectedImage)



    const renderItem =({item})=>{
        // console.log(item.uri)
        return(
            <TouchableOpacity onPress={()=>handelDelete({uri: item.uri})} style={{flexDirection:'row',width:100,height:150,backgroundColor:'red',margin:10,}}>
                <Image
                    style={{height:"100%",width:"100%",}}
                    // source={item.uri}
                    source={{uri: item.uri}}
                />
            </TouchableOpacity>
        )
    }

    const handelDelete=({uri})=>{
        // console.log(uri)
        setSelectedImage(selectedImage.filter(image=>image!=uri))
    }



    return(
        <Root>
        <View style={styles.container}>
            <Button
                onPress={() =>
                    ActionSheet.show(
                        {
                            options: [
                                {
                                    text:'Gallery',
                                    icon:'md-images',
                                    iconColor:'blue',
                                },
                                {
                                    text:'Camera',
                                    icon:'camera',
                                    iconColor:'green',
                                },
                                {
                                    text:'Cancel',
                                    icon:'close',
                                    iconColor:'red',
                                },
                            ],
                            cancelButtonIndex: 2,
                            title: "Choose Photo",
                        },
                        (selectedIndex) => {

                            if (selectedIndex==0){
                            //    Choose from gallery
                                ImagePicker.launchImageLibrary({
                                        multiple: true,
                                    mediaType:'photo',
                                    quality:1,
                                    maxWidth:200,
                                    maxHeight:300,
                                    // includeBase64:true,
                                },
                                    (response)=>{
                                        console.log(response)
                                        // setSelectedImage({uri:response.uri})
                                        setSelectedImage([...selectedImage,{uri:response.uri}])
                                    }
                                    )
                            }
                            else if (selectedIndex==1){
                            //    Choose from camera
                                ImagePicker.launchCamera({
                                    quality:1,
                                    maxWidth:200,
                                    maxHeight:300,
                                    includeBase64:true,
                                },(response)=>{
                                    // console.log(response)
                                    // setSelectedImage({uri:response.uri})
                                    setSelectedImage([...selectedImage,{uri:response.uri}])

                                })
                            }

                        }
                    )}
            >
                <Text>Actionsheet</Text>
            </Button>


            {/*<View style={{width:200,height:300,backgroundColor:'dark'}}>*/}
            {/*    <Image*/}
            {/*        style={{height:"100%",width:"100%",}}*/}
            {/*        source={selectedImage}*/}
            {/*    />*/}
            {/*</View>*/}



                <FlatList
                    data={selectedImage}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.uri}
                />


        </View>

        </Root>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});


export default BasketScreen;




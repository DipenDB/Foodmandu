

import React from 'react';
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import MapView,{ Marker,Callout } from "react-native-maps";

const MapScreen=()=>{
    const markers=[
        {
            coordinates: {
                latitude: 32.631805,
                longitude: -96.535305,
            },
            title: "Best Place",
            description: "This is the best place in Portland",
            image: require('../../../Assets/rest1.jpg')
        },
        {
            coordinates: {
                latitude: 32.625444,
                longitude: -96.550582,
            },
            title: "Second Best Place",
            description: "This is the second best place in Portland",
            image: require('../../../Assets/rest2.jpg')
        },
        {
            coordinates: {
                latitude: 32.675453,
                longitude: -96.509361,
            },
            title: "Third Best Place",
            description: "This is the third best place in Portland",
            image: require('../../../Assets/rest3.jpg')
        },

    ]


    const [region, setRegion] = React.useState({
        latitude: 32.631805,
        longitude: -96.535305,
        // latitudeDelta: 0.01,
        // longitudeDelta: 0.01,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    });
    return(
        <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation={true}
            onRegionChangeComplete={region => setRegion(region)}
        >

            {markers.map((marker,index)=>(
                <Marker key={index}
                        coordinate={marker.coordinates}
                        // coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }}
                        pinColor="pink"
                >

                    <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                                <Image
                                    style={{height:80,width:120}}
                                    // source={require('../../Assets/rest1.jpg')}
                                    source={marker.image}
                                />
                                <Text style={{fontWeight:'bold'}}>{marker.title}</Text>
                                <Text>{marker.description}</Text>
                            </View>
                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>

                        </View>
                    </Callout>




                </Marker>

            ))}

            {/*<Marker coordinate={{ latitude: 32.631805, longitude: -96.535305 }}*/}
            {/*        pinColor="green"*/}
            {/*/>*/}

        </MapView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    arrow:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor:'#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop:-32,
    },
    arrowBorder:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor:'#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop:-0.5,
    },
    bubble:{
        // flexDirection:'column',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:7,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:10,
        width: 150,
    },
});


export default MapScreen;




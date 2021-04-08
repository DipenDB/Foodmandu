

import React from 'react';
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps';
import {Markers} from '../../Assets/Constant/Map';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MoreScreen=()=>{
    return(
        <Text>Hello</Text>
    )

    // const initialMapState ={
    //     Markers,
    //     categories:[
    //         {
    //             name:'Fast Food Center',
    //             icon: <Icon style={{height:30,width:30,}} name='food-fork-drink' size={18} />
    //         },
    //         {
    //             name:'Restaurant',
    //             icon: <Icon style={{height:30,width:30,}} name='ios-restaurant' size={18} />
    //         },
    //         {
    //             name:'Fast Food Center',
    //             icon: <Icon style={{height:30,width:30,}} name='md-restaurant' size={18} />
    //         },
    //         {
    //             name:'Snack Corner',
    //             icon: <Icon style={{height:30,width:30,}} name='food' size={18} />
    //         },
    //     ],
    //     region:{
    //         latitude:34.800326,
    //         longitude:-111.7665047,
    //     }
    // }
    //
    // const [state,setState]=React.useState(initialMapState);
    // console.log(initialMapState)
    //
    // return(
    //         <MapView
    //
    //             // initialRegion={this.state.region}
    //             provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    //             style={styles.map}
    //             customMapStyle={standardStyle}
    //             region={{
    //                 latitude: 37.78825,
    //                 longitude: -122.4324,
    //                 latitudeDelta: 0.015,
    //                 longitudeDelta: 0.0121,
    //             }}
    //
    //         >
    //
    //             {/*{state.Markers.map((marker,index)=>{*/}
    //             {/*        return(*/}
    //
    //             {/*            <MapView.Marker key={index} coordinate={marker.coordinate}>*/}
    //             {/*                <Image*/}
    //             {/*                    source={require('../../Assets/map.png')}*/}
    //             {/*                    style={styles.marker}*/}
    //             {/*                    resizeMode='cover'*/}
    //             {/*                />*/}
    //             {/*            </MapView.Marker>*/}
    //             {/*        )*/}
    //             {/*    })}*/}
    //
    //
    //
    //
    //
    //
    //
    //             {/*{state.Markers.map((marker,index)=>{*/}
    //             {/*    return(*/}
    //             {/*        <Marker*/}
    //             {/*            key={index}*/}
    //             {/*            coordinate={marker.coordinate}*/}
    //             {/*            image={require('../../Assets/map.png')}*/}
    //
    //             {/*            // title="Test 1"*/}
    //             {/*            // description='This is test 1'*/}
    //             {/*        >*/}
    //
                {/*            <Callout tooltip>*/}
                {/*                <View>*/}
                {/*                    <View style={styles.bubble}>*/}
                {/*                        <Image*/}
                {/*                            style={{height:80,width:120}}*/}
                {/*                            source={require('../../Assets/rest1.jpg')}*/}
                {/*                        />*/}
                {/*                        <Text style={styles.name}>Title</Text>*/}
                {/*                        <Text>A short description.</Text>*/}

                {/*                    </View>*/}
                {/*                    <View style={styles.arrowBorder}/>*/}
                {/*                    <View style={styles.arrow}/>*/}
                {/*                </View>*/}
                {/*            </Callout>*/}
    //
    //             {/*        </Marker>*/}
    //             {/*    )*/}
    //             {/*})}*/}
    //
    //         <Marker
    //             coordinate={{
    //                 latitude:37.78825,
    //                 longitude:-122.4324,
    //                 // latitudeDelta:0.015,
    //                 // longitudeDelta:0.0121,
    //             }}
    //             image={require('../../Assets/map.png')}
    //
    //             title="Test 1"
    //             description='This is test 1'
    //         >
    //
    //             <Callout tooltip>
    //                 <View>
    //                     <View style={styles.bubble}>
    //                         <Image
    //                             style={{height:80,width:120}}
    //                             source={require('../../Assets/rest1.jpg')}
    //                         />
    //                         <Text style={styles.name}>Title</Text>
    //                         <Text>A short description.</Text>
    //
    //                     </View>
    //                     <View style={styles.arrowBorder}/>
    //                     <View style={styles.arrow}/>
    //                 </View>
    //             </Callout>
    //
    //         </Marker>
    //
    //
    //
    //
    //         </MapView>
    //
    // )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: '100%',
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
    name:{
      fontSize:16,
        fontWeight:'bold',
      marginBottom:5,
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
});

const mapDarkStyle= [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#263c3f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6b9a76"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#38414e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#212a37"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9ca5b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#1f2835"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f3d19c"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2f3948"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#515c6d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    }
]

const standardStyle=[
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]


export default MoreScreen;






import React, {useEffect} from 'react';
import {View,Text,StyleSheet,StatusBar,Dimensions,SafeAreaView} from 'react-native';
import MapView, { Marker, AnimatedRegion, } from "react-native-maps";
import PubNubReact from "pubnub-react";
import Geolocation from '@react-native-community/geolocation';


const haversine = require('haversine')

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const TrackingLocation=()=>{
    let marker = React.useRef()
    // let marker = React.createRef()
    // let markerRef = React.useRef()


    const [state,setState]=React.useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        })
    })

    const calcDistance = newLatLng => {
        const { prevLatLng } = state;
        return haversine(prevLatLng, newLatLng) || 0;
        // console.log(haversine(prevLatLng, newLatLng) || 0)
    };




    useEffect(()=>{
        const watchId = watchLocation();
    })


    const watchLocation = async () => {
        const auth = await Geolocation.getCurrentPosition(position => {

        // this.watchID = navigator.geolocation.watchPosition(
        //     position => {

                console.log(position)

                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };
                console.log(newCoordinate)

                if (Platform.OS === "android") {
                    if (marker) {
                        marker._component.animateMarkerToCoordinate(
                            newCoordinate,
                            500 // 500 is the duration to animate the marker
                        );
                    }
                } else {
                    state.coordinate.timing(newCoordinate).start();
                }

                setState({
                    latitude,
                    longitude,
                    routeCoordinates: state.routeCoordinates.concat([newCoordinate]),   //<------
                    distanceTravelled: state.distanceTravelled + calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                });
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }
        );
    };

    const getMapRegion = () => ({
        // latitude: this.state.latitude,
        latitude: state.latitude,
        // longitude: this.state.longitude,
        longitude: state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={getMapRegion()}
                >
                    <Marker.Animated
                        ref={marker => {
                            marker = marker;
                        }}
                        coordinate={state.coordinate}
                    />
                </MapView>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    container: {
        flex: 1,
    },
    map: {
        flex:1,
    }
});


export default TrackingLocation;




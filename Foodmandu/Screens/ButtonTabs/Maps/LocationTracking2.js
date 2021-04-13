

import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,StatusBar,Platform} from 'react-native';
import MapView, {
    Marker,
    AnimatedRegion,
    Polyline,
    PROVIDER_GOOGLE
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
const haversine = require('haversine')


// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;

const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = 0.1;
const LATITUDE = 47.755106;
const LONGITUDE = -122.290297;

const LocationTracking2=()=>{

    let markerRef = React.useRef()



    const [state,setState]=useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        // LATITUDE_DELTA:LATITUDE_DELTA,
        // LONGITUDE_DELTA:LONGITUDE_DELTA,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        coordinate: new AnimatedRegion({
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA,
        })
    })

    const getMapRegion = () => ({
        latitude:state.latitude,
        longitude:state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    });
    const calcDistance = newLatLng => {
        const { prevLatLng } = state;
        return haversine(prevLatLng, newLatLng) || 0;
        // console.log(haversine(prevLatLng, newLatLng) || 0)
    };


    useEffect(async ()=>{
        const auth = await Geolocation.getCurrentPosition(info => {
            const { latitude, longitude } = info.coords;
            // console.log(info)

            const newCoordinate = {
                latitude,
                longitude
            };

                // if (Platform.OS === "android") {
                //     if (markerRef) {
                //         markerRef._component.animateMarkerToCoordinate(    // _component Removed on class
                //             newCoordinate,
                //             500
                //         );
                //     }
                // } else {
                //     state.coordinate.timing(newCoordinate).start();
                // }


            console.log(newCoordinate)

            setState({
                ...state,
                latitude,
                longitude,
                routeCoordinates: state.routeCoordinates.concat([newCoordinate]),   //<------
                distanceTravelled: state.distanceTravelled + calcDistance(newCoordinate),
                prevLatLng: newCoordinate
            })
        },
    error => {
            console.log(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }


        );

    },[])




    return(
        // <View style={styles.container}>
        //     <Text>Hello</Text>
        // </View>
        <MapView
            style={styles.container}
            showUserLocation
            followUserLocation
            loadingEnabled
            region={getMapRegion()}
        >
            {/*<Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />*/}
            {/*<Marker*/}
            {/*    ref={markerRef}*/}
            {/*    coordinate={state.coordinate}*/}
            {/*/>*/}

        </MapView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});


export default LocationTracking2;




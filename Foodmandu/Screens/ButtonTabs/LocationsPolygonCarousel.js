
import React from 'react';
import {View,Text,StyleSheet,Platform,Alert,Dimensions,Image} from 'react-native';
import {request,PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

import MapView,
{ PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle }
    from 'react-native-maps';


class LocationsPolygonCarousel extends React.Component{
    state = {
        markers: [],
        coordinates: [
            { name: 'Burger', latitude: 37.429418, longitude: -122.109549,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11A09/production/_110410227_82e33a29-3a6c-45dd-889c-c295a13b7298.png" },
            { name: 'Pizza', latitude: 37.417018,  longitude: -122.125615,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11A09/production/_110410227_82e33a29-3a6c-45dd-889c-c295a13b7298.png" },
            { name: 'Soup', latitude: 37.400705, longitude: -122.119586,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11A09/production/_110410227_82e33a29-3a6c-45dd-889c-c295a13b7298.png" },
            { name: 'Sushi', latitude: 37.399689,  longitude: -122.083900, image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11A09/production/_110410227_82e33a29-3a6c-45dd-889c-c295a13b7298.png"},
            { name: 'Curry', latitude: 37.423400,  longitude: -122.097954,image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/11A09/production/_110410227_82e33a29-3a6c-45dd-889c-c295a13b7298.png" },
        ]
    }

    componentDidMount(){
        this.requestLocationPermission();
    }

    requestLocationPermission=async ()=>{
        if (Platform.OS==='ios'){
            var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            console.log('iphone :'+response)
            if (response==='granted'){
                this.locateCurrentPosition()
            }
        }
        else {
            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            console.log('android :'+response)
            if (response==='granted'){
                this.locateCurrentPosition()
            }
        }
    }

    locateCurrentPosition=()=>{
        Geolocation.getCurrentPosition(position => {
                console.log(JSON.stringify(position))

                let initialPosition={
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    longitudeDelta:0.09,
                    latitudeDelta:0.09,
                }

                this.setState({initialPosition})
            },
            error =>alert(error.message),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
        )
    }





    renderCarousel=({item,index})=>{
        return(
            <View style={styles.cardContainer}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                </View>
                <Image
                    style={styles.cardImage}
                    source={{uri: item.image}}
                />
            </View>
        )
    }

    onCarouselItemChange=(index)=>{
        let location = this.state.coordinates[index]

        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })

        this.state.markers[index].showCallout()

    }

    onMarkerPressed = (location, index) => {
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        });

        this._carousel.snapToItem(index);
    }



    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    style={styles.map}
                    initialRegion={this.state.initialPosition}
                >


                    <Polygon
                        coordinates={this.state.coordinates}
                        fillColor={'rgba(100, 100, 200, 0.3)'}
                    />

                    <Circle
                        center={{
                            latitude: 37.429418,
                            longitude: -122.109549
                        }}
                        radius={500}
                        fillColor={'rgba(200, 300, 200, 0.5)'}
                    />

                    {
                        this.state.coordinates.map((marker, index) => (
                            <Marker
                                key={marker.name}
                                ref={ref => this.state.markers[index] = ref}
                                onPress={() => this.onMarkerPressed(marker, index)}
                                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            >
                                <Callout>
                                    <Text>{marker.name}</Text>

                                </Callout>

                            </Marker>
                        ))
                    }



                </MapView>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.coordinates}
                    renderItem={this.renderCarousel}
                    containerCustomStyle={styles.carousel}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={300}
                    removeClippedSubviews={false}
                    onSnapToItem={(index)=>this.onCarouselItemChange(index)}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map:{
        flex: 1,
    },
    carousel:{
        position:'absolute',
        bottom:0,
        marginBottom:48,
    },
    cardContainer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        height:200,
        width:300,
        padding:20,
        borderRadius:24,
    },
    cardImage:{
        height: 120,
        width:300,
        bottom: 0,
        position:'absolute',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    cardTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        // alignSelf:'center',
    },
});


export default LocationsPolygonCarousel;




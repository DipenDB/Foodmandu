

import React, {useContext} from 'react';
import {View,Text,StyleSheet,StatusBar,Button} from 'react-native';
const SplashScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>Splash Screen</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default SplashScreen;




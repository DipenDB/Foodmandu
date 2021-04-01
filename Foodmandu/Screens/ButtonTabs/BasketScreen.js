

import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

const BasketScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>Basket Screen</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default BasketScreen;




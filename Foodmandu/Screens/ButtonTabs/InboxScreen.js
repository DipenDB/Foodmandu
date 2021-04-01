

import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

const InboxScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>Inbox Screen</Text>

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


export default InboxScreen;




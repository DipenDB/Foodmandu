

import React, {useContext} from 'react';
import {View,Text,StyleSheet,StatusBar,Button} from 'react-native';
import AuthContext from '../Store/Context/AuthContext';
const ProfileScreen=()=>{
    const authContext = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Button onPress={()=>authContext.logOut()} style={{backgroundColor: 'red',color:'white'}} title='Log Out'/>

            <Text>Profile Screen</Text>

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


export default ProfileScreen;




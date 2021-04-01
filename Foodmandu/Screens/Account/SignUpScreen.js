

import React, {useContext} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Color from '../../Assets/Colors';
import {add} from 'react-native-reanimated';
import AuthContext from '../../Store/Context/AuthContext';
import axios from 'axios';

const SignUpScreen=(props)=>{
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "Create a Account"})})

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const authContext =useContext(AuthContext);



    const handleSignup= ()=>{
         const auth = authContext.signUpUserWithFirebase({email, password, address, phone})
        props.navigation.navigate('SignIn')
    }


    return(
        <View style={styles.container}>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{marginBottom:20,}}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{marginBottom:20,}}
                />
            <TextInput
                label="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                style={{marginBottom:20,}}
            />
            <TextInput
                label="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
                style={{marginBottom:20,}}
            />
                {/*<Button mode="contained" onPress={()=>authContext.signUpUserWithFirebase({email, password, address, phone})}>*/}
                <Button mode="contained" onPress={handleSignup}>
                    Sign-Up
                </Button>
                <View>
                    <Text style={{fontFamily:'Ubuntu-Regular',fontSize:18,marginTop:10,}}>Already signup ?<Text onPress={()=>props.navigation.navigate('SignIn')} style={{color:Color.red}}> Sign In !</Text></Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical:30,
        paddingHorizontal:20,
    },
});


export default SignUpScreen

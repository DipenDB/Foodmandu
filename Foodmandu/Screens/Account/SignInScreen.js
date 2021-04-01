

import React, {useContext} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { TextInput ,Button } from 'react-native-paper';
import Color from '../../Assets/Colors'
import AuthContext from '../../Store/Context/AuthContext';


const SignInScreen=(props)=>{

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "Login"})})



    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const authContext  = useContext(AuthContext);



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
            {/*<Button mode="contained" onPress={authContext.loginWithFirebase(email,password)}>*/}
            <Button mode="contained" onPress={()=>console.log("Pressed")}>
                Login
            </Button>

            {authContext.error && <Text style={{color: 'red'}}>Something went Wrong</Text>}
            <View>
                <Text style={{fontFamily:'Ubuntu-Regular',fontSize:18,marginTop:10,}}>Forget Password ?<Text onPress={()=>props.navigation.navigate('SignUp')} style={{color:Color.red}}> Create Account !</Text></Text>
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


export default SignInScreen;




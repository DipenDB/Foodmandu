

import React, {useContext} from 'react';
import {View,Text,StyleSheet,StatusBar,Image,TextInput,TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {Form, Item, Input,Button, Label } from 'native-base';
import { Formik } from 'formik';
import * as yup from 'yup';
import Color from '../../Assets/Colors'
import AuthContext from '../../Store/Context/AuthContext';




const validationSchema=yup.object().shape({
    email: yup.string().required().email().label('Email'),    //label for error name Capitalization
    password:yup.string().required().min(5).label('Password')
});


const Login=(props)=>{
    const authContext  = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1, width:'100%'}}
                                     keyboardShouldPersistTaps='always'>
                <Image
                    style={styles.logo}
                    source={require('../../Assets/foodmandu.jpg')}
                />

                <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={(values)=>{
                        const auth = authContext.loginWithFirebase({
                            email:values.email,
                            password:values.password,
                        })
                    }}
                    validationSchema={validationSchema}
                >
                    {({handleChange,handleBlur,handleSubmit,errors,setFieldTouched,touched})=>(
                        <>

                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                keyboardType='email-address'


                                textContentType='emailAddress'
                                onBlur={()=>setFieldTouched('email')}

                                onChangeText={handleChange('email')}

                            />

                            {touched.email && <Text style={{color:'red',marginLeft:15,}}>{errors.email}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                secureTextEntry

                                textContentType='password'
                                onBlur={()=>setFieldTouched('password')}

                                onChangeText={handleChange('password')}

                            />

                            {touched.password && <Text style={{color:'red',marginLeft:15,}}>{errors.password}</Text>}




                            {authContext.errorMessage!=='' && <Text style={{color:'red'}}>{authContext.errorMessage}</Text>}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonTitle}>Log in</Text>
                            </TouchableOpacity>

                            <View style={styles.footerView}>
                                <Text style={styles.footerText}>Don't have an account? <Text onPress={()=>props.navigation.navigate('Register')} style={styles.footerLink}>Sign up</Text></Text>
                            </View>


                        </>
                    )}




                </Formik>


            </KeyboardAwareScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo:{
        flex: 1,
        height: 120,
        width: "80%",
        alignSelf: "center",
        margin: 30
    },
    input:{
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: Color.whiteBlack,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button:{
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerText:{
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
});


export default Login;




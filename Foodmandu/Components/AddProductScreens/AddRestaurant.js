

import React, {useContext} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import Color from '../../Assets/Colors';
import AuthContext from '../../Store/Context/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';


const validationSchema=yup.object().shape({
    name:yup.string().required().min(2).label('Restaurant Name'),
    city: yup.string().required().label('City'),    //label for error name Capitalization
    address:yup.string().required().min(3).label('Address'),
    opening:yup.string().required().label('Opening Time'),
    image:yup.string().required().label('Image Link'),

});


const AddRestaurant=(props)=>{
    const authContext =useContext(AuthContext);
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "Add Restaurant"})})

    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1, width:'100%'}}
                                     keyboardShouldPersistTaps='always'>
                <Image
                    style={styles.logo}
                    source={require('../../Assets/foodmandu.jpg')}
                />

                <Formik
                    initialValues={{name:'',city:'',address:'',opening:'',image:''}}

                    onSubmit={(values)=>{
                        // console.log(values.email)
                        const auth = authContext.addRestaurantData({
                            name:values.name,
                            city:values.city,
                            address:values.address,
                            opening:values.opening,
                            image:values.image,
                        })
                        props.navigation.navigate('Restaurant')
                    }}
                    validationSchema={validationSchema}
                >
                    {({handleChange,handleBlur,handleSubmit,errors,setFieldTouched,touched})=>(
                        <>

                            <TextInput
                                style={styles.input}
                                placeholder='Restaurant Name'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'

                                onBlur={()=>setFieldTouched('name')}

                                onChangeText={handleChange('name')}

                            />

                            {touched.name && <Text style={{color:'red',marginLeft:15,}}>{errors.name}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Address'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='word'



                                // textContentType='fullStreetAddress'
                                onBlur={()=>setFieldTouched('address')}

                                onChangeText={handleChange('address')}

                            />

                            {touched.address && <Text style={{color:'red',marginLeft:15,}}>{errors.address}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='City'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                // keyboardType='number-pad'



                                // textContentType='telephoneNumber'
                                onBlur={()=>setFieldTouched('city')}

                                onChangeText={handleChange('city')}

                            />

                            {touched.phone && <Text style={{color:'red',marginLeft:15,}}>{errors.phone}</Text>}




                            <TextInput
                                style={styles.input}
                                placeholder='Opening Time'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                keyboardType='email-address'

                                // textContentType='emailAddress'
                                onBlur={()=>setFieldTouched('opening')}

                                onChangeText={handleChange('opening')}

                            />

                            {touched.email && <Text style={{color:'red',marginLeft:15,}}>{errors.email}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Image Link'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                // secureTextEntry


                                // textContentType='password'
                                onBlur={()=>setFieldTouched('image')}

                                onChangeText={handleChange('image')}

                            />

                            {touched.password && <Text style={{color:'red',marginLeft:15,}}>{errors.password}</Text>}




                            <TouchableOpacity type="submit" style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonTitle}>Add Restaurant</Text>
                            </TouchableOpacity>

                            {/*<button type="submit">Submit</button>*/}

                            <View style={styles.footerView}>
                                <Text style={styles.footerText}>Cancel <Text onPress={()=>props.navigation.goBack()} style={styles.footerLink}>Go Back</Text></Text>
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
        color: "green",
        fontWeight: "bold",
        fontSize: 16
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
});


export default AddRestaurant;




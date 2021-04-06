

import React, {useContext} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import Color from '../../Assets/Colors';
import AuthContext from '../../Store/Context/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';


const validationSchema=yup.object().shape({
    name:yup.string().required().min(2).label('Groceries Name'),
    category: yup.string().required().min(2).label('Category'),    //label for error name Capitalization
    type:yup.string().required().min(3).label('Type'),
    availableQuantity:yup.string().required().min(1).label('Available Quantity'),
    image:yup.string().required().label('Image Link'),
});


const AddGroceries=(props)=>{
    const authContext =useContext(AuthContext);
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: "Add Groceries"})})

    return(
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1, width:'100%'}}
                                     keyboardShouldPersistTaps='always'>
                <Image
                    style={styles.logo}
                    source={require('../../Assets/foodmandu.jpg')}
                />

                <Formik
                    initialValues={{name:'',category:'',type:'',availableQuantity:'',image:''}}

                    onSubmit={(values)=>{
                        // console.log(values.email)
                        const auth = authContext.addGroceriesData({
                            name:values.name,
                            category:values.category,
                            type:values.type,
                            availableQuantity:values.availableQuantity,
                            image:values.image,
                        })
                        props.navigation.navigate('Groceries')
                    }}
                    validationSchema={validationSchema}
                >
                    {({handleChange,handleBlur,handleSubmit,errors,setFieldTouched,touched})=>(
                        <>

                            <TextInput
                                style={styles.input}
                                placeholder='Groceries Name'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='word'

                                onBlur={()=>setFieldTouched('name')}

                                onChangeText={handleChange('name')}

                            />

                            {touched.name && errors.name && <Text style={{color:'red',marginLeft:15,}}>{errors.name}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Category'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='word'



                                // textContentType='fullStreetAddress'
                                onBlur={()=>setFieldTouched('category')}

                                onChangeText={handleChange('category')}

                            />

                            {touched.category && errors.category && <Text style={{color:'red',marginLeft:15,}}>{errors.category}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Type'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='word'
                                // keyboardType='number-pad'



                                // textContentType='telephoneNumber'
                                onBlur={()=>setFieldTouched('type')}

                                onChangeText={handleChange('type')}

                            />

                            {touched.type && errors.type && <Text style={{color:'red',marginLeft:15,}}>{errors.type}</Text>}




                            <TextInput
                                style={styles.input}
                                placeholder='Available Quantity'
                                placeholderTextColor='#aaa'
                                underlineColorAndroid='transparent'
                                autocapitalize='none'
                                keyboardType='numeric'

                                // textContentType='emailAddress'
                                onBlur={()=>setFieldTouched('availableQuantity')}

                                onChangeText={handleChange('availableQuantity')}

                            />

                            {touched.availableQuantity && errors.availableQuantity && <Text style={{color:'red',marginLeft:15,}}>{errors.availableQuantity}</Text>}


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

                            {touched.image && errors.image && <Text style={{color:'red',marginLeft:15,}}>{errors.image}</Text>}




                            <TouchableOpacity type="submit" style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonTitle}>Add Grocery</Text>
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


export default AddGroceries;




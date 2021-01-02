import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { AuthC } from '../../Context/authContext';

import * as yup from 'yup';

import style from './style';

export default function Register(){
    const navigator = useNavigation();
    const { handRegister } = AuthC();

    function Back(){
        navigator.goBack();
    }
    return(
        <KeyboardAvoidingView 
        behavior='height'
        style={style.container}>
            <View style={style.ViewContainer}>

            <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 20}}>Please Register</Text>
            
            

            <Formik initialValues={{}} onSubmit={{}} validationSchema={yup.object().shape({
                name: yup.string().required('*'),
                lastname: yup.string().required('*'),
                email: yup.string().typeError('Email is not valid').required('*').email(),
                password: yup.string().required('*').min(5).max(22),
                passwordC: yup.string().equals([yup.ref('password'), null], 'Confirm password').required('*')
            })}>
                    {({values , handleChange, errors }) => (

                <Fragment>
                    {errors.name && <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>}
                    <TextInput style={style.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    placeholder="Name"
                    autoCorrect={false}/>

                    {errors.lastname && <Text style={{fontSize: 10, color: 'red'}}>{errors.lastname}</Text>}
                    <TextInput style={style.input}
                    value={values.lastname}
                    onChangeText={handleChange('lastname')}
                    placeholder="Last Name"
                    autoCorrect={false}/>
                    
                    
                    {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
                    <TextInput style={style.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                    autoCorrect={false}
                    />

                    {errors.password && <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>}
                    <TextInput style={style.input}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="password"
                    autoCorrect={false}
                    />
                    
                    {errors.passwordC && <Text style={{fontSize: 10, color: 'red'}}>{errors.passwordC}</Text>}
                    <TextInput style={style.input}
                    value={values.passwordC}
                    onChangeText={handleChange('passwordC')}
                    placeholder="Confirm password" 
                    autoCorrect={false}/>
                    
                    
                <View >

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableOpacity  onPress={Back}>
                         <Text style={{fontSize: 16}}>If you are already an user please login <Feather name="arrow-right" size={18} color="#f00" /></Text>
                         </TouchableOpacity>
                        </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={style.button} onPress={() => handRegister(values)}>
                    <Text style={{color: '#fff', fontSize: 25}}>Sign Up</Text>
                </TouchableOpacity>

                </View>

                


                </View>
                </Fragment>
                )}



            </Formik>
            </View>
        </KeyboardAvoidingView>
    );
}
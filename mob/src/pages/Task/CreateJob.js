import React, { createRef, Fragment, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons/'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { AuthC } from '../../Context/authContext';
import Constants from 'expo-constants';
import * as yup from 'yup';
import taskapi from '../../services/taskapi';


export default function CreateJob(){

  Navi=useNavigation();

  function createNewJob(values){
    var str;
    str=values.belongTo.split(',');
    values.belongTo=str;
    console.log(values);
    create(values);
    Navi.goBack();
  }

  async function create(values){
    try{
        const response = await taskapi.post('createTask',values);
        return response;
    }catch(err){
        console.log('Error cant create new Task')
    }
}


   
    return(
        <KeyboardAvoidingView 
        behavior='height'
        style={style.container}>
            <View style={style.ViewContainer}>

            <Text style={{fontSize: 28, fontWeight: 'bold', marginBottom: 20}}>Create New Job</Text>
            
            

            <Formik initialValues={{}} onSubmit={{}} validationSchema={yup.object().shape({
                _id:yup.number().required('*'),
                name: yup.string().required('*'),
                description: yup.string().required('*'),
                belongTo: yup.string().required('*').min(5).max(22),
            })}>
                    {({values , handleChange, errors }) => (

                <Fragment>
                    {errors._id && <Text style={{fontSize: 10, color: 'red'}}>{errors._id}</Text>}
                    <TextInput style={style.input}
                    value={values._id}
                    onChangeText={handleChange('_id')}
                    placeholder="Task number"
                    autoCorrect={false}/>

                    {errors.name && <Text style={{fontSize: 10, color: 'red'}}>{errors.name}</Text>}
                    <TextInput style={style.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    placeholder="Task Name"
                    autoCorrect={false}/>

                    {errors.description && <Text style={{fontSize: 10, color: 'red'}}>{errors.description}</Text>}
                    <TextInput style={style.input}
                    value={values.description}
                    onChangeText={handleChange('description')}
                    placeholder="description"
                    autoCorrect={false}/>

                    {errors.belongTo && <Text style={{fontSize: 10, color: 'red'}}>{errors.belongTo}</Text>}
                    <TextInput style={style.input}
                    value={values.belongTo}
                    onChangeText={handleChange('belongTo')}
                    placeholder="BelongTo:Halid,Jack,Anna"
                    autoCorrect={false}
                    />
                   
                    
                    
                <View >

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                       
                        </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={style.button} onPress={() => createNewJob(values)}>
                    <Text style={{color: '#fff', fontSize: 25}}>Create!</Text>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 24,
},

ViewContainer: {
    justifyContent: "center",
    alignItems: 'center',
    
},
input: {
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
},


button: {
    backgroundColor: '#000',
    width: 190,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 8
}
});
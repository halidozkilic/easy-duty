import axios from 'axios';
import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import { AuthC } from '../../Context/authContext';
import taskapi from '../../services/taskapi';
import { useNavigation } from '@react-navigation/native';

export default function GetJobs () {
  const Navi = useNavigation();
  const [jobs,setJobs]=useState([""]);
      

  function handleCreateJobs(list){
    Navi.navigate('CreateJob');
}

      
   useEffect(() => {
    async function getJobs(){
      try{
          const response = await taskapi.get('getJobs');
          setJobs(response.data);
          return response;
      }catch(err){
          console.log('Error cant fecth Jobs')
      }
  }
  getJobs();
}, [taskapi,jobs])

      
//console.log(jobs)
   
        return(
            <View style={styles.container}>
                <Text>{jobs[0].name}</Text>
                <TouchableOpacity onPress={() => handleCreateJobs()}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>Create New Job</Text>
                    </TouchableOpacity>        
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
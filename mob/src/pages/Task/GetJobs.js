import axios from 'axios';
import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,FlatList } from 'react-native';
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
              <FlatList style={{}}
            data={jobs}
            keyExtractor={jobs => String(jobs._id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: jobs }) => (
                <View style={styles.box}>
                    <Text style={styles.TextBox}>Task name: {jobs.name}</Text>
                    <Text style={styles.TextBox}>Task description: {jobs.description}</Text>
                    <Text style={styles.TextBox}>status: {jobs.status}</Text>
                    <Text style={styles.TextBox}>Enrolled:</Text>
                    <FlatList style={styles.TextBox}
                                data={jobs.belongTo}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item,index }) => (
                                
                                 <View >

                                <Text style={styles.worker}> {item}</Text>
                                
                            </View>
            )}
            />

                    <TouchableOpacity onPress={() => console.log("oluyor")}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>...comments</Text>
                    </TouchableOpacity>
                </View>
            )}
            />
                
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
    button : {
      backgroundColor: "#000",
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginStart: 20,
      marginTop: 10,
  },

  Text: {
      fontSize: 20,
      marginBottom: 3
  },

  box: {
      flex: 1,
      backgroundColor: 'black',
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginStart: 20,
      padding: 10
  },

  TextBox: {
      color: 'white',
      fontSize: 15,
      lineHeight: 50,
      borderWidth: 0.2,
      marginBottom: 10,
      padding: 10
  },
  worker: {
    color: 'white',
    fontSize: 15,
}
  });
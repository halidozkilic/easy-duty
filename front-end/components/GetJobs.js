import axios from 'axios';
import React, {Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class GetJobs extends Component {
    state={
        jobs:["SAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"],
        setJobs:[]
      }
    
       componentDidMount(){
        axios.get("https://easy-duty-api.herokuapp.com/api/getJobs")
        .then( response=>{    

           
           this.setState({jobs:response.data});
        
          console.log(this.state.jobs[0].name)
           
        })
        .catch( (error)=> {
          console.log(error);
        });
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.jobs[0].name}</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
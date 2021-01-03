import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AuthC } from '../../Context/authContext';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';


import style from './style';
export default function Profile(){
    const Navi = useNavigation();
    const [list, setList] = useState([]);
    const { handleLogout, user } = AuthC();

    function handleInfo(list){
        Navi.navigate('Info', {list});
    }

    useEffect(() => {
        
        async function handList(){
            try{
              
                setList(user)
            }catch(err){
                console.log('Error couldt fecth user infos')
            }
        }

        handList();
    }, [])

    return(
        <View style={style.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>

                <TouchableOpacity style={style.button} onPress={handleLogout} >
                    <Text style={{color: '#fff', fontSize: 20}}>Logout</Text>
                </TouchableOpacity>

            <Text style={{marginEnd: 20, fontWeight: 'bold', fontSize: 18}}>Welcome, {user}</Text>
            </View>
            
            
        </View>
    );
}
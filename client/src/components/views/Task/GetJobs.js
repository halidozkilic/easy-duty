
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';

import taskapi from '../../../services/taskapi';


function GetJobs () {

    const [jobs,setJobs]=useState([]);
    let data;

    useEffect(() => {
        async function getJobs(){
            try{
                const response = await taskapi.get('getJobs');
                setJobs(response.data);
                data=jobs;
                return response;
            }catch(err){
                console.log('Error cant fecth Jobs')
            }
        }
        getJobs();
    }, [])



    return(
        <div style={styles.container}>
            {console.log(jobs)}
            {jobs.map((job) => (
                <div style={styles.box}>
                    <p style={styles.TextBox}>Task name: {job.name}</p>
                    <p style={styles.TextBox}>Task description: {job.description}</p>
                    <p style={styles.TextBox}>status: {job.status}</p>
                    <p style={styles.TextBox}>Enrolled:</p>
                    {job.belongTo.map(arr=>(
                        <div >
                            <p style={styles.worker}> {arr}</p>
                        </div>
                    ))}
                    <div >
                        <p style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>...comments</p>
                    </div>
                    </div>
            ))}
            <div>
                <Button style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>Create New Job</Button>
            </div>
        </div>

    );
            }


const styles = {
    container : {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        backgroundColor: "#000",
        width: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginStart: 20,
        marginTop: 10,
    },

    p: {
        fontSize: 20,
        marginBottom: 3
    },

    box: {
        flex: 1,
        backgroundColor: 'black',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginStart: 20,
        padding: 10
    },

    TextBox: {
        color: 'white',
        fontSize: 15,

        borderWidth: 0.2,
        marginBottom: 10,
        padding: 10
    },
    worker: {
        color: 'white',
        fontSize: 15,
    }
}

export default GetJobs;
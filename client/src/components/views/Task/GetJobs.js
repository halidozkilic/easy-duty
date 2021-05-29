
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList,faPlus,faChevronRight } from "@fortawesome/free-solid-svg-icons"


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
                    <div>
                        <FontAwesomeIcon style={{fontSize: 25,paddingLeft:5}} icon={faClipboardList} />
                    </div>
                    <div style={styles.task}>
                        <div  style={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
                            <p>{job.name}</p>
                        </div>

                        <p style={styles.TextBox}>Task description: {job.description}</p>
                        <p style={styles.TextBox}>status: {job.status}</p>

                        <div  style={{ display:'flex', justifyContent:'center',alignItems:'flex-start'}}>
                            <p style={styles.TextBox}>Enrolled:</p>
                            {job.belongTo.map(arr=>(
                                <div style={{padding:9}}>
                                    <p style={styles.worker}> {arr}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{float:'right'}}>
                            <Button  onClick={(e) => {
                                e.preventDefault();
                                window.location.href='/getJobDetails/'+job._id;
                            }}
                                     style={{fontSize: 16, fontWeight: 'bold', marginTop: 20,borderRadius:52}}>
                                <FontAwesomeIcon  icon={faChevronRight} />
                                <FontAwesomeIcon  icon={faChevronRight} />
                            </Button>

                        </div>
                    </div>
                    </div>

            ))}
            <div>
                <Button  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/createJobs';
                }}
                         style={{fontSize: 16, fontWeight: 'bold', marginTop: 20,borderRadius:52}}>
                    <FontAwesomeIcon  icon={faPlus} /></Button>

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
    task : {


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
        backgroundColor: '#7798AB',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginStart: 20,
        padding: 10,
        borderRadius:19,
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
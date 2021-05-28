import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import taskapi from '../../../services/taskapi';
import { Button } from 'antd';

import React, { useState, useEffect } from 'react';



const JobDetail = () => {
    const [jobs,setJobs]=useState([]);
    let { id } = useParams();
    let belongTo;
    let comments;
    useEffect(() => {
        async function getJobs(){
            try{
                const response = await taskapi.get('/getJobs/'+id);
                setJobs(response.data);
                belongTo=jobs.belongTo;
                comments=jobs.comments;
                return response;
            }catch(err){
                console.log('Error cant fecth Jobs')
            }
        }
        getJobs();
    }, [])



    return (
        <div style={styles.container}>
            {console.log(jobs)}
            <div style={styles.center}>
                <p>Task Name: {jobs.name}</p>
                <p>Task Description: {jobs.description}</p>
                <p>Status: {jobs.status}</p>
                <p>Enrolled</p>
                {jobs.belongTo ?
                    <div style={styles.belongTo}>
                        {jobs.belongTo.map(arr => (
                            <p>{arr}</p>
                        ))}
                    </div>
                    :
                    <p></p>
               }
                {jobs.comments ?
                    <div style={styles.comments}>
                        {jobs.comments.map(ax => (
                            <p>{ax.username} : {ax.comment}</p>

                        ))}
                    </div>
                    :
                    <p></p>
                }


            </div>
        </div>
    );
};

const styles = {
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
};

export default JobDetail;
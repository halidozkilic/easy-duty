import taskapi from '../../../services/taskapi';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleLeft, faAngleDoubleRight, faChevronRight, faClipboardList} from "@fortawesome/free-solid-svg-icons"


const Profile = () => {
    const [user,setUser]=useState([]);
    const [index,setindex]=useState(0);
    const [job,setJob]=useState([]);
    const id = localStorage.getItem('userId');

    let datas;
    useEffect(async () => {
        async function getUser(){
            try{
                const response = await taskapi.get('/userById/'+id);
                setUser(response.data);
                datas=response.data
                return response;
            }catch(err){
                console.log('Error cant fecth Jobs')
            }
        }
      await  getUser();
        getJobs(index)
    }, [])

        async function getJobs(int){
            try{

                const response = await taskapi.get('/getJobs/'+datas.tasks[int].jobID);
                setJob(response.data);

                return response;
            }catch(err){
                console.log('Error cant fecth vv')
            }
        }





    return (
        <div style={styles.container}>
            {console.log(job)}


            <div style={styles.main}>
                <div style={styles.box}>
                    <div style={styles.center}>
                        <p>Hello {user.name}</p>
                        <div>
                            <p>name:{user.name}</p>
                            <p>last name:{user.lastname}</p>
                            <p>username:{user.username}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display:'flex',flex: 1,justifyContent:'space-between',alignItems:'center',paddingTop:30}}>
                <div style={styles.back}>
                    {
                        index<=0 ? '' :
                            <Button  onClick={(e) => {
                               setindex(index-1)

                                {console.log(index)}
                            }}
                                     style={{border:"hidden"}}>
                                <FontAwesomeIcon style={{fontSize: 25,paddingLeft:5}} icon={faAngleDoubleLeft}/> </Button>


                    }
                </div>



                <div style={{width:300}}>

                    <div style={{backgroundColor:'#7798AB', borderRadius:19}}>
                        <div>
                            <FontAwesomeIcon style={{fontSize: 25,paddingLeft:5}} icon={faClipboardList} />
                        </div>
                        <div style={styles.task}>
                            <div>
                                <p>{job.name}</p>
                            </div>

                            <p style={styles.TextBox}>Task description: {job.description}</p>
                            <p style={styles.TextBox}>status: {job.status}</p>

                            <div >
                                <p style={styles.TextBox}>Enrolled:</p>
                                { job.belongTo ?
                                    job.belongTo.map(arr=>(
                                    <div style={{padding:9}}>
                                        <p style={styles.worker}> {arr}</p>
                                    </div>
                                )) : ''}
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

                </div>




                <div style={styles.forward}>
                    {
                        user.tasks ?
                        index>= user.tasks.length-1 ? '' :
                            <Button  onClick={(e) => {
                                setindex(index+1)

                                {console.log(index)}
                            }}
                                     style={{border:"hidden"}}>
                                <FontAwesomeIcon style={{fontSize: 25,paddingLeft:5}} icon={faAngleDoubleRight}/> </Button> : ''


                    }


                </div>
            </div>

        </div>
    );
};

const styles = {
    main : {
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
export default Profile;
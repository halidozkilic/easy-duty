import React, { createRef, Fragment, useState } from 'react';
import {  Input, Button } from 'antd';

import { Formik } from 'formik';

import * as Yup from 'yup';
import taskapi from '../../../services/taskapi';


 function CreateJob () {



    function createNewJob(values){
        var str = values.belongTo;
        console.log(values)
        if(str.includes(',')){
            str=values.belongTo.split(',');
        } else {
            str=values.belongTo;
        }

        values.belongTo=str;
        console.log(values);
        create(values);
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
        <div
            style={style.container}>
            <div style={style.ViewContainer}>

                <p style={{fontSize: 28, fontWeight: 'bold', marginBottom: 20}}>Create New Job</p>



                <Formik initialValues={{}} onSubmit={{}} validationSchema={Yup.object().shape({
                    _id:Yup.number().required('*'),
                    name: Yup.string().required('*'),
                    description: Yup.string().required('*'),
                    belongTo: Yup.string().required('*').min(5).max(22),
                })}>
                    {({values , handleChange, errors }) => (

                        <Fragment>
                            {errors._id && <p style={{fontSize: 10, color: 'red'}}>{errors._id}</p>}
                            <Input style={style.input}
                                       value={values._id}
                                       onChange={handleChange('_id')}
                                       placeholder="Task number"
                                       autoCorrect={false}/>

                            {errors.name && <p style={{fontSize: 10, color: 'red'}}>{errors.name}</p>}
                            <Input style={style.input}
                                       value={values.name}
                                       onChange={handleChange('name')}
                                       placeholder="Task Name"
                                       autoCorrect={false}/>

                            {errors.description && <p style={{fontSize: 10, color: 'red'}}>{errors.description}</p>}
                            <Input style={style.input}
                                       value={values.description}
                                       onChange={handleChange('description')}
                                       placeholder="description"
                                       autoCorrect={false}/>

                            {errors.belongTo && <p style={{fontSize: 10, color: 'red'}}>{errors.belongTo}</p>}
                            <Input style={style.input}
                                       value={values.belongTo}
                                       onChange={handleChange('belongTo')}
                                       placeholder="BelongTo:Halid,Jack,Anna"
                                       autoCorrect={false}
                            />



                            <div >

                                <div style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

                                </div>

                                <div style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <div  >
                                        <Button style={style.button} onClick={() => createNewJob(values)}>Create!</Button>
                                    </div>

                                </div>




                            </div>
                        </Fragment>
                    )}

                </Formik>
            </div>
        </div>
    );
}

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },

    ViewContainer: {
        display:'flex',
        flexDirection:'column',
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
        borderRadius: 8,
        color:'white'
    }
}

export default  CreateJob;
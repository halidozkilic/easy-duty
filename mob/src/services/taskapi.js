import axios from 'axios';

const taskapi = axios.create({
    baseURL: 'https://easy-duty-api.herokuapp.com/api/'
})

export default taskapi;
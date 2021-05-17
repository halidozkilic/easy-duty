import axios from 'axios';

const taskapi = axios.create({
    baseURL: 'https://easy-duty-api.herokuapp.com/api/'
})

export function getList() {
    return fetch('https://easy-duty-api.herokuapp.com/api/getJobs')
        .then(data => data.json())
}


export default taskapi;
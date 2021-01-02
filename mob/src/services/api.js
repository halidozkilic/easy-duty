import axios from 'axios';

const api = axios.create({
    baseURL: 'https://easy-duty-api.herokuapp.com/api/users/'
})

export default api;
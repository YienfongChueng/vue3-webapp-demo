import axios from 'axios'

const request = axios.create({
    baseURL: 'http://49.235.128.49:3012',
    timeout: 30000
})

request.interceptors.request.use(config => {
    return config
})
request.interceptors.response.use(response => {
    return response;
},error => {
    return Promise.reject(error);
})
export default request
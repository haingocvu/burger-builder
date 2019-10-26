import axios from 'axios';

const http = axios.create({
    baseURL: 'https://react-my-burger-97294.firebaseio.com/'
})

export default http;
import axios from 'axios';
import store from '../redux/store';
import {selectAccessToken, selectRefreshToken} from '../redux/selectors';

const accessToken = selectAccessToken(store);
const refreshToken = selectRefreshToken(store);


const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})

export default axiosInstance;
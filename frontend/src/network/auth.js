import axiosInstance from './index';
import {setTokens} from '../redux/slices/authSlice';



export async function login(email, password){
    const response = await axiosInstance.post(
        '/token/obtain/', 
        {
            email,
            password
        }
    )
    .then(
        response => {
            //console.log(`Everethin ok, response  is ${response}`);
            return response.data;
        }
    ).catch(
        error => {
            throw error
        }
    )
    
    return response;
}

export async function register(email, password){
    const response = await axiosInstance.post(
        '/users/create/', 
        {
            email,
            password
        }
    )
    .then(
        response => {
            //console.log(`Everethin ok, response  is ${response}`);
            return response.data;
        }
    ).catch(
        error => {
            throw error
        }
    )
    
    return response;
}
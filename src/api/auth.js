import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

export const login = async (userId,password) => {

    const result = await axios.post(`${BASE_URL}/login`,{loginID:userId,loginPW:password},config);
    return result;
};

export const logout = async (userId) => {

};
import axios from "axios";

const API_URL = 'url que no tengo'

//registrar un usuario 
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService = {
    register
}

export default authService
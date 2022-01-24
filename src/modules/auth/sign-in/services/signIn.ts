import axios from 'axios';
import { UserCredentials } from '../models';

const token = process.env.REACT_APP_AUTH_TOKEN

axios.defaults.withCredentials = true

const login = async (credentials: UserCredentials) => {
  const response = await axios.post("https://warker-api.herokuapp.com/api/login", 
    credentials, {
    headers: { 
      'Authorization': `Bearer ${token}`, 
      'Access-Control-Allow-Origin': '*'
    }
  })
  console.log(response);
}

export { login }
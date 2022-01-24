import axios from 'axios';
import { UserCredentials } from '../models';

const register = async (credentials: UserCredentials) => {
  const response = await axios.post("https://warker-api.herokuapp.com/api/register", 
    credentials
  )
  console.log(response);
}

export { register }
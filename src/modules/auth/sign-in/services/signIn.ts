import axios from 'axios';
import { UserCredentials, UserLoginResponse } from '../models';


const login = async (credentials: UserCredentials): Promise<UserLoginResponse> => {
  const response = await axios.post("https://warker-api.herokuapp.com/api/login", 
    credentials
  )
  console.log(response)
  return {
    ...response.data,
    status: response.status
  }
}

export { login }
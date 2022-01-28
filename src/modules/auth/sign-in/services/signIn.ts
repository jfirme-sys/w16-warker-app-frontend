import axios from 'axios';
import { axiosHttpClient } from 'infra/http/axiosHttpClient';
import { UserCredentials, UserLoginResponse } from '../models';


const login = async (credentials: UserCredentials): Promise<UserLoginResponse> => {
  const response = await axiosHttpClient.post("https://warker-api.herokuapp.com/api/login",
    credentials)
  return {
    ...response.data,
    status: response.status
  }
}

export { login }
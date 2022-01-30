import { axiosHttpClient } from 'infra/http/axiosHttpClient';
import { UserCredentials } from '../models';

const register = async (credentials: UserCredentials) => {
  const response = await axiosHttpClient.post("https://warker-api.herokuapp.com/api/register",
    credentials
  )
  console.log(response);
}

export { register }
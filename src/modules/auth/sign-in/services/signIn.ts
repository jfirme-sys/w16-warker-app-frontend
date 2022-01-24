import axios from 'axios'
import { UserCredentials } from '../models';

const login = async (credentials: UserCredentials) => {
  const response = await axios.post("https://warker-api.herokuapp.com/api/login", credentials)
  console.log(response);
}

export { login }
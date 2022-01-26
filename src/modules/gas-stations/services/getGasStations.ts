import axios from 'axios';
import { AuthContext } from 'providers/authProvider';
import { useContext } from 'react';


const getGasStations = async (): Promise<any> => {
  const { userData } = useContext(AuthContext)
  const response = await axios.get("https://warker-api.herokuapp.com/api/posto/", {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }
  })

  return response.data
}

export { getGasStations }
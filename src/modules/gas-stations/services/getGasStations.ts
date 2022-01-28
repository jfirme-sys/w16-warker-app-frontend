import axios from 'axios';
import { axiosHttpClient } from 'infra/http/axiosHttpClient';

const getGasStations = async (userToken: string): Promise<any> => {
  const response = await axiosHttpClient.get("https://warker-api.herokuapp.com/api/posto", {
    headers: {
      Authorization: `Bearer ${userToken}`,
    }
  })

  return response.data
}

export { getGasStations }
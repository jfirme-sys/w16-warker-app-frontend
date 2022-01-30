import { axiosHttpClient } from 'infra/http/axiosHttpClient';
import { GasStations } from '../models';

const getGasStations = async (): Promise<GasStations[]> => {
  const response = await axiosHttpClient.get("https://warker-api.herokuapp.com/api/posto")

  return response.data.data
}

export { getGasStations }
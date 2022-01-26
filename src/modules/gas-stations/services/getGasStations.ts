import axios from 'axios';

const getGasStations = async (userToken: string): Promise<any> => {
  const response = await axios.get("https://warker-api.herokuapp.com/api/posto/", {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  })

  return response.data
}

export { getGasStations }
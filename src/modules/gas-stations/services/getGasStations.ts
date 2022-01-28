import axios from 'axios';

const getGasStations = async (userToken: string): Promise<any> => {
  const response = await axios.get("https://warker-api.herokuapp.com/api/posto", {
    headers: {
      Authorization: `Bearer ${userToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  })

  console.log(response.data);

  return response.data
}

export { getGasStations }
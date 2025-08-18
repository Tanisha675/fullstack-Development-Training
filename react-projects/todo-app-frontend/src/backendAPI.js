import axios from 'axios'
const host="http://localhost:3000"

async function callCreateApi(apipath, body) {
  try {
    const response = await axios.post(host + apipath, body);
    console.log(`callCreateApi response ${JSON.stringify(response.data)}`);
    return response.data;
  } catch (error) {
    alert(`api call got failed, error: ${error}`);
    return null;
  }
}


export {callCreateApi}
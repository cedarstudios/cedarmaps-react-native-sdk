import axios from 'axios'
import { CEDAR_MAPS_API_URL } from '../constants/config'

export const getToken = async ({ clientId, clientSecret }) => {
  const result = await axios.post(`${CEDAR_MAPS_API_URL}/token`, {
    client_id: clientId,
    client_secret: clientSecret,
  })
  const { access_token } = JSON.parse(result)
  return access_token
}

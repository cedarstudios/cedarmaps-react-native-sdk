import { CEDAR_MAPS_API_URL } from '../constants/config'

export const getToken = async ({ clientId, clientSecret }) => {

  let formData = new FormData()
  formData.append('client_id',clientId)
  formData.append('client_secret',clientSecret)
  const result = await fetch(`${CEDAR_MAPS_API_URL}/token`,
    {
      method: 'post',
      body: formData
    })
  const {access_token} = await result.json()

  return access_token
}

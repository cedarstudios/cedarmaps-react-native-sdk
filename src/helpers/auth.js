import { CEDARMAPS_BASE_URL } from '../constants/config'

export const getToken = async ({ clientId, clientSecret, mapBaseUrl = CEDARMAPS_BASE_URL }) => {

  let formData = new FormData()
  formData.append('client_id', clientId)
  formData.append('client_secret', clientSecret)
  const result = await fetch([mapBaseUrl, '/v1/token'],
    {
      method: 'post',
      body: formData,
    })

  if (result.status !== 200) {
    console.error('Invalid client id or secret provided')
  }
  const { access_token } = await result.json()

  return access_token
}

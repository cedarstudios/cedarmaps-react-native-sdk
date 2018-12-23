import React, { Component } from 'react'
import Mapbox from '@cedarstudios/react-native-mapbox-gl'
import { DARK_STYLE_URL, LIGHT_STYLE_URL, LIGHT_RASTER_STYLE_URL } from './constants/styles'
import { getToken } from './helpers/auth'
import { View } from 'react-native'

Mapbox.setAccessToken('pk.1234')

const styleMapper = {
  'style://streets-light': LIGHT_STYLE_URL,
  'style://streets-dark': DARK_STYLE_URL,
  'style://streets-light-raster': LIGHT_RASTER_STYLE_URL,
}

const backgroundColorMapper = {
  LIGHT_STYLE_URL: '#f4f3f0',
  DARK_STYLE_URL: '#213945',
  LIGHT_RASTER_STYLE_URL: '#f4f3f0',
}

class CedarMaps extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      token: null,
    }
  }

  componentDidMount() {
    const { clientId, clientSecret } = this.props

    if (!clientId || !clientSecret) throw Error('client_id or client_secret not provided')
    getToken({
      clientSecret,
      clientId,
    })
      .then(token => {
        this.setState({
          token,
        })
      })
  }

  render() {
    const { mapStyle } = this.props
    const { token } = this.state
    const cedarMapStyle = styleMapper[mapStyle] || LIGHT_STYLE_URL
    if (!token) {
      return (<View style={{
        flex: 1,
        backgroundColor: backgroundColorMapper[cedarMapStyle]
      }}/>)
    }
    const tileJsonUrl = `${cedarMapStyle}?access_token=${token}`
    return (
      <Mapbox.MapView
        {...this.props}
        styleURL={tileJsonUrl}
      >
      </Mapbox.MapView>
    )
  }
}

export default CedarMaps

import React, { Component } from 'react';
import { cleanUrl } from './helpers/utils'
import {
  DARK_STYLE_URL,
  LIGHT_STYLE_URL,
  LIGHT_RASTER_STYLE_URL,
} from './constants/styles'
import { CEDARMAPS_BASE_URL } from './constants/config'
import { getToken } from './helpers/auth'
import { View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.kdsevitantcaerspamradecsisiht')

const styleMapper = {
  'style://streets-light': LIGHT_STYLE_URL,
  'style://streets-dark': DARK_STYLE_URL,
  'style://streets-light-raster': LIGHT_RASTER_STYLE_URL,
}

const backgroundColorMapper = {
  'style://streets-light': '#f4f3f0',
  'style://streets-dark': '#213945',
  'style://streets-light-raster': '#f4f3f0',
}

class CSMapView extends Component {
  
  map;
  constructor(props) {
    super(props)
    this.state = {
      token: null,
    }
  }
  
  getMap(){
    return this.map
  }
  
  getMapbox() {
    return MapboxGL
  }
  
  componentDidMount() {
    const { clientId, clientSecret, mapBaseUrl } = this.props
    
    if (!clientId || !clientSecret) throw Error('client_id or client_secret not provided')
    getToken({
      clientSecret,
      clientId,
      mapBaseUrl: cleanUrl(mapBaseUrl),
    })
    .then(token => {
      this.setState({
        token,
      })
    })
  }
  
  render() {
    const { mapStyle, mapBaseUrl = CEDARMAPS_BASE_URL } = this.props
    const baseUrl = cleanUrl(mapBaseUrl)
    const { token } = this.state
    const cedarMapStyle = [baseUrl, styleMapper[mapStyle] || LIGHT_STYLE_URL].join('/')
    
    if (!token) {
      return (<View style={{
        flex: 1,
        backgroundColor: backgroundColorMapper[mapStyle],
      }}/>)
    }
    
    const tileJsonUrl = `${cedarMapStyle}?access_token=${token}`
    return (
      <MapboxGL.MapView
      ref={ (ref) => (this.map = ref) }
      { ...this.props }
      styleURL = { tileJsonUrl }
      >
      </MapboxGL.MapView>
      )
    }
  }
  
  export default CSMapView;
  
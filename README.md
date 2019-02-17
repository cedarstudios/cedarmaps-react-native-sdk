<a href="https://www.cedarmaps.com">
  <img src="http://api.cedarmaps.com/docs/img/cedarmaps-api.png" width="500"/>
</a>

# CedarMasp SDK for React Native

## What is CedarMaps?

CedarMaps is the location data platform for mobile and web applications. We provide [building blocks](https://www.cedarmaps.com) to add location features like maps, search, and navigation into any experience you create. Use our simple and powerful APIs & SDKs and our open source libraries for interactivity and control.

## Sign up for CedarMaps

Not a CedarMaps user yet? [Sign up for an account here](https://www.cedarmaps.com/#demo). Once you’re signed in, all you need to start building is a CedarMaps access token.

---

This guide will take you through the process of integrating CedarMaps into your React Native application.

All the mentioned methods and tools in this document are tested on Android Studio v3.2.1 and Xcode 10.1.

## Table of Contents
- [Installation](#installation)
	-	[Platform Specific Guides](#platform-specific-installation-guides)
- [MapView](#initializing-a-map)
- [Documentation](#documentation)
  - [Components](#components)
  - [Sources](#sources)
  - [Layers](#layers)

## Installation

**Dependencies**

* [node](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [React Native](https://facebook.github.io/react-native/) recommended version 0.50 or greater

**Npm**
```
npm install @cedarstudios/react-native-cedarmaps --save
```

**Yarn**
```
yarn add @cedarstudios/react-native-cedarmaps
```

Please check your ```node_modules``` folder under ```@cedarstudios``` directory. There should be two submodules: ```react-native-cedarmaps``` and ```react-native-mapbox-gl```. If either of which is not present, try the above commands one more time. Sometimes, because of network issues, Mapbox binary wouldn't download completely.

## Platform Specific Installation Guides

* [Android](https://github.com/cedarstudios/cedarmaps-react-native-sdk/blob/master/android-install.md)
* [iOS](https://github.com/cedarstudios/cedarmaps-react-native-sdk/blob/master/ios-install.md)

## Initializing a Map

Once you’ve set up your development environment, created a new React Native project, and installed the CedarMaps SDK for React Native, you’re ready to initialize a map in your App.js file.

First, you’ll import the components that you will need. This includes components from React, React Native, and CedarMaps. 

To display a map you’ll need CedarMaps credentials (```clientID``` and ```clientSecret```). CedarMaps uses an access token generated from these to associate requests to API resources with your account. 

Use the CedarMaps MapView component to initialize your map. The MapView component will add a map to the view, and you can add props to specify some parameters for the map including the map style, zoom level, and center of the map.

Here’s the complete code to display a map:

```js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CedarMaps from '@cedarstudios/react-native-cedarmaps';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <CedarMaps
            clientId={"YOUR_CLIENT_ID"}
            clientSecret={"YOUR_CLIENT_SECRET"}
            mapStyle={"style://streets-light"}
            mapBaseUrl={"YOUR_BASE_URL"} //If you have received an API Base URL. (Optional)
            zoomLevel={15}
            centerCoordinate={[51.4093, 35.7546]}
            style={styles.container}>
        </CedarMaps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
```

Other possible values for ```mapStyle``` are:

#### Vector Tiles (Recommended)
* ```style://streets-light```
* ```style://streets-dark```

#### Raster Tiles
* ```style://streets-light-raster```



## Documentation

CedarMaps SDK is based on [Mapbox Maps SDK for React Native v6.1.3](https://github.com/mapbox/react-native-mapbox-gl) and provides extra API methods over Mapbox. 
For more information about how to use MapView and other components such as **Adding Markers**, **Showing Current Location**, etc., please see [Mapbox for React Native First Steps](https://www.mapbox.com/help/first-steps-react-native-sdk/).

### Functions

- getMap():  
  get the map ref object 
- getMapbox():  
  You can get main mapbox object (react-native-mapbox-gl) via `getMapbox()` functions attached to CedarMaps

### Components
* [MapView](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/MapView.md)
* [Light](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/Light.md)
* [StyleSheet](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/StyleSheet.md)
* [PointAnnotation](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/PointAnnotation.md)
* [Callout](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/Callout.md)

### Sources
* [VectorSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/VectorSource.md)
* [ShapeSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/ShapeSource.md)
* [RasterSource](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/RasterSource.md)

### Layers
* [BackgroundLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/BackgroundLayer.md)
* [CircleLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/CircleLayer.md)
* [FillExtrusionLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/FillExtrusionLayer.md)
* [FillLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/FillLayer.md)
* [LineLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/LineLayer.md)
* [RasterLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/RasterLayer.md)
* [SymbolLayer](https://github.com/mapbox/react-native-mapbox-gl/blob/master/docs/SymbolLayer.md)

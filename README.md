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

All the mentioned methods and tools in this document are tested on Android Studio v3.5.1 and Xcode 11.1 in October 2019.

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
* [React Native](https://facebook.github.io/react-native/) Version 0.59 or greater

**Yarn**
```
yarn add @cedarstudios/react-native-cedarmaps
```

**Npm**
```
npm install @cedarstudios/react-native-cedarmaps --save
```

## Platform Specific Installation Guides

* [Android](https://github.com/cedarstudios/cedarmaps-react-native-sdk/blob/master/android-install.md)
* [iOS](https://github.com/cedarstudios/cedarmaps-react-native-sdk/blob/master/ios-install.md)

## Getting Started

Once you’ve set up your development environment, created a new React Native project, and installed the CedarMaps SDK for React Native, you’re ready to initialize a map in your App.js file.

First, you’ll import the components that you will need. This includes components from React, React Native, and CedarMaps. 

To display a map you’ll need CedarMaps credentials (```clientID``` and ```clientSecret```). CedarMaps uses an access token generated from these to associate requests to API resources with your account. 

Use the CedarMaps Map component, which is basically an extended MapView component, to initialize your map. The Map component will add a map to the view, and you can add props to specify some parameters for the map such as style and camera.

Here’s a sample code to display a map:

```js
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';

import CedarMaps from '@cedarstudios/react-native-cedarmaps';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CedarMaps.Map
        style={styles.container}
        clientId={"YOUR_CLIENT_ID"}
        clientSecret={"YOUR_CLIENT_SECRET"}
        mapStyle={"style://streets-light"}
        >
          <CedarMaps.Camera
            zoomLevel={15}
            centerCoordinate={[51.4093, 35.7546]}
          />  
      </CedarMaps.Map>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
```

Other possible values for ```mapStyle``` are:

#### Vector Tiles (Recommended)
* ```style://streets-light```
* ```style://streets-dark```

#### Raster Tiles
* ```style://streets-light-raster```



## Documentation

CedarMaps SDK is based on [Mapbox Maps SDK for React Native v7.0.7](https://github.com/react-native-mapbox-gl/maps).

CedarMaps Component is basically a wrapper component over MapboxGL with some added stuff. All methods and properties available on MapboxGL are available on CedarMaps as well.

### Functions

- getMap():  
Getting the map ref object. 

### Components
* [MapView](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/MapView.md)
* [Light](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/Light.md)
* [StyleSheet](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/StyleSheet.md)
* [PointAnnotation](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/PointAnnotation.md)
* [Callout](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/Callout.md)
* [Camera](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/Camera.md)
* [UserLocation](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/UserLocation.md)
* [Images](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/Images.md)

### Sources
* [VectorSource](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/VectorSource.md)
* [ShapeSource](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/ShapeSource.md)
* [RasterSource](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/RasterSource.md)

### Layers
* [BackgroundLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/BackgroundLayer.md)
* [CircleLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/CircleLayer.md)
* [FillExtrusionLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/FillExtrusionLayer.md)
* [FillLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/FillLayer.md)
* [LineLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/LineLayer.md)
* [RasterLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/RasterLayer.md)
* [SymbolLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/SymbolLayer.md)
* [HeatmapLayer](https://github.com/react-native-mapbox-gl/maps/blob/master/docs/HeatmapLayer.md)


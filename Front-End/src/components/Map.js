import React from 'react';
import {Text,StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude:10.7860415,
        longitude:106.6297085,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
    />
  );
}

const styles=StyleSheet.create({
  map:{
    height:400
  }
});

export default Map;
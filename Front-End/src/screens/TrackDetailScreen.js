import React, { useContext } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';
import MapView,{Polyline} from 'react-native-maps';


const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  
  return (
    <>
      <Spacer/>
      <MapView style={styles.map}
        initialRegion={{
          longitudeDelta:0.01,
          latitudeDelta:0.01,
          ...initialCoords
        }}
      >
       <Polyline  coordinates={track.locations.map(loc=>loc.coords)}/>
      </MapView>
      <Spacer/>
      <Text style={{fontWeight:'bold',alignSelf:'center'}}>You have been arrived {track.name}</Text>
    </>
  );
}

TrackDetailScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  map:{
    height:500
  }
});

export default TrackDetailScreen;
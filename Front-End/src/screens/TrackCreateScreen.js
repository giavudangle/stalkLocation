//import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Map from '../components/Map';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [err, setErr] = useState(null);


  const startWatching = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);
      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 500,
        distanceInterval: 0.5
      }, (location) => {
        console.log(location);
      });


    } catch (e) {
      setErr(e);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a track</Text>
      <Spacer />
      <Map />
      {err ? <Text>Please enalbe location services</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;
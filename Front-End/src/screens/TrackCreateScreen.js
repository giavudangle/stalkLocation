//import _mockLocation from '../_mockLocation'

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from 'react-navigation';


import Map from '../components/Map';
import Spacer from '../components/Spacer';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {
  const { addLocation } = useContext(LocationContext);
  const [err]= useLocation(isFocused,addLocation);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer />
      <Spacer />
      <Map />
      {err ? <Text>Please enalbe location services</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);

//import _mockLocation from '../_mockLocation'
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from 'react-navigation';

import Icon from '@expo/vector-icons/FontAwesome'

import Map from '../components/Map';

import Spacer from '../components/Spacer';
import TrackForm from '../components/TrackForm';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {
  const { 
    state:{
      recording
    },
    addLocation } = useContext(LocationContext);

  const callback=useCallback(location => {
    
    addLocation(location,recording);
  },[recording]);
  
  const [err] = useLocation(isFocused,callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Icon name="magic" size={30} style={styles.icon}/>
      <Map />
      {err ? <Text>Please enalbe location services</Text> : null}
      <TrackForm/>
    </SafeAreaView>
  );
}

TrackCreateScreen.navigationOptions = {
  title:'Add Track',
}




const styles = StyleSheet.create({
  icon:{
    alignSelf:'center',
    marginTop:12,
    marginBottom:10,
    color:'#5885ed'
  }
});

export default withNavigationFocus(TrackCreateScreen);
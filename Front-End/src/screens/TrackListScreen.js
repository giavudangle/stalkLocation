import React, { useContext } from 'react';

import { FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import Spacer from '../components/Spacer';


const TrackListScreen = ({ navigation }) => {
  const { fetchTracks, state } = useContext(TrackContext);
  //console.log(state);
  return (
    <>
      <Spacer/>
      <NavigationEvents
        //onWillBlur={fetchTracks}
        onWillFocus={fetchTracks}
      />
       <Spacer/>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
           
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', { _id: item._id })
              }}
            >
              <ListItem
                chevron
                title={item.name}
              />
            </TouchableOpacity>
          );
        }}
      />

    </>
  );
}

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};


const styles = StyleSheet.create({

});

export default TrackListScreen;
import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state:{
      name,recording,locations
    },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack]=useSaveTrack();
 
  //console.log(state.name);
  //console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Create new stalk"
          onChangeText={changeName}
          value={name}
        />
        
      </Spacer>
      {
      recording 
      ? 
        <Button
          title="Stop"
          buttonStyle={styles.buttonStyle}
          onPress={stopRecording}
        />
      :
        <Button
          title="Start Stalk"
          buttonStyle={styles.buttonStyle}
          onPress={startRecording}
        />
      }
      
      {
        !recording && locations.length
        ?<Button 
          title="Save Recording"
          buttonStyle={styles.saveStyle} 
          onPress={saveTrack}
         />
        :null
      }
     
    </>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#5885ed',
    borderRadius: 30,
    width: 150,
    height: 30,
    alignSelf: 'center',
  },
  saveStyle:{
    backgroundColor: '#62bf37',
    marginTop:10,
    borderRadius:50,
    width: 150,
    height: 30,
    alignSelf:'center'
    
  }
})

export default TrackForm;
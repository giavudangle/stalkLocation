import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet ,View} from 'react-native';

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
  //console.log(locations);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Create new stalk"
          onChangeText={changeName}
          value={name}
        />
        
      </Spacer>
      <View style={styles.container}>
        {
        recording 
        ? 
          <Button
            title="Stop"
            buttonStyle={styles.stopStyle}
            onPress={stopRecording}
          />
        :
          <Button
            title="Start "
            buttonStyle={styles.startStyle}
            onPress={startRecording}
          />
        }
        
        {
          !recording && locations.length
          ?<Button 
            title="Save "
            buttonStyle={styles.submitStyle} 
            onPress={saveTrack}
            
          />
          :null
        }
      </View>
     
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  startStyle: {
    backgroundColor: `#0097e6`,
    borderRadius: 30,
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  submitStyle: {
    backgroundColor: `#4cd137`,
    borderRadius: 30,
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  stopStyle: {
    backgroundColor: `#c23616`,
    borderRadius: 30,
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
 
})

export default TrackForm;
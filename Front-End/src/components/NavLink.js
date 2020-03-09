import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import Spacer from './Spacer';
import {TouchableOpacity} from 'react-native-gesture-handler'

import { withNavigation} from 'react-navigation';

const NavLink = ({ navigation ,text,routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <View style={styles.line}/>
      <Spacer>
        <Text style={styles.link}>{text}</Text> 
      </Spacer>
      
      <Spacer/>
      

     
    </TouchableOpacity>
  );
  
};

const styles = StyleSheet.create({
  link:{
    color:'black',
    alignSelf:'center',
    fontSize:15,
    marginTop:10,
    fontWeight:'200'
  },
  line: {
    height:3,
    width:250,
    backgroundColor:'gray',
    alignSelf:'center',
    marginTop:30,
    fontWeight:'normal'
  }
});

export default withNavigation(NavLink);
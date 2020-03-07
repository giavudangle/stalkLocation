import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import {TouchableOpacity} from 'react-native-gesture-handler'

import { withNavigation} from 'react-navigation';

const NavLink = ({ navigation ,text,routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text> 
      </Spacer>
    </TouchableOpacity>
  );
  
};

const styles = StyleSheet.create({
  link:{
    color:'blue',
    alignSelf:'center',
    fontSize:15,
    marginTop:15,
  }
});

export default withNavigation(NavLink);
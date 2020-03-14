import React, { useContext } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';


const AccountScreen = () => {
  const { signout } = useContext(AuthContext);


  return (
    <SafeAreaView forceInset={{top:"always"}}>
      <View>
        <Spacer>
          <Button buttonStyle={styles.signOutButton} title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signOutButton:{
    marginTop:500
  }
});

export default AccountScreen;
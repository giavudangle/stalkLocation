import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import SignupScreen from './SignupScreen';
import { Context as AuthContext } from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';

const SiginScreen = () => {
  const { state, signin ,clearErrorMessage} = useContext(AuthContext);


  return (
    <View>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
        
      />
      <Spacer/>
      <AuthForm
        headerText="Sign in to Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        routeName="Signup"
        text="Dont have an account ?"
      />
    </View>
  );
}

SiginScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SiginScreen;
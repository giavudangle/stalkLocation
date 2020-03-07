import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext } from '../context/AuthContext';
import { navigationEvents, NavigationEvents } from 'react-navigation';



const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign up for new User"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account ?"
      />

    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;
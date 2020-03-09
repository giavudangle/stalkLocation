import React, { useState } from 'react';

import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import Spacer from './Spacer';
import Icon from '@expo/vector-icons/AntDesign'


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Spacer>
        <Text style={styles.header}>{headerText}</Text>
      </Spacer>
      <Icon name="fork" style={styles.icon}/>
      <Spacer/>

      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </Spacer>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
          buttonStyle={styles.buttonStyle}
        />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 50,
    color: 'red',
  },
  header:{
    fontSize:30,
    alignSelf:'center',
    marginBottom:30
  },
  icon:{
    alignSelf:'center',
    fontSize:50
  },
  buttonStyle:{
    backgroundColor:'#5885ed',
    borderRadius:30,
    width:200,
    height:50,
    alignSelf:'center'
  }
});

export default AuthForm;
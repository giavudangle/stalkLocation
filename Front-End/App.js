import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';

import { Provider as AuthProvider } from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';


import ResolveAuthScreen from './src/screens/ResolveAuthScreen';


import AccountScreen from './src/screens/AccountScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';

import Icon from '@expo/vector-icons/FontAwesome5'
import SiginScreen from './src/screens/SigninScreen';



const loginFlow = createStackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen
});

const trackFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
  },
);

const rootFlow = createBottomTabNavigator(
  { 
  Track:trackFlow, 
  Create:TrackCreateScreen,
  Account:AccountScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon:({tintColor}) => {
        let {routeName}=navigation.state;
        let iconName;

        if(routeName==='Track')
          iconName='search';
        
        else if (routeName==='Create')
          iconName='plus-circle';
        else if (routeName==='Account')
          iconName='user-circle';
        return (
          <Icon 
            color={`${tintColor}`}
            name={`${iconName}`}
            size={25}
            style={{marginTop:5}}
          />
        );   
      },
    })
  }
  
)

const rootNavigator = createSwitchNavigator({
  ResolveAuthScreen,
  loginFlow,
  rootFlow,
})


const App = createAppContainer(rootNavigator);


export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignIn from '../Pages/SignIn';


export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true, cardStyle: { backgroundColor: '#f2f3f5'} }}>
        <Screen  
          name="SignIn" 
          component={SignIn} 
        />
      </Navigator>
    </NavigationContainer>
  )
}
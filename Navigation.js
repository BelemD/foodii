import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingPage } from './Components/LandingPage';
import OnboardingScreen from './Components/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LangingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import UserSignUp from './Screens/UserSignUp';
import VendorSignUp from './Screens/VendorSignUp';
import Cart from './Screens/Cart';
import Checkout from './Screens/Checkout';
import Confirmation from './Screens/Confirmation';
import HomePage from './Screens/HomePage';
import { useState } from 'react';
import NavigationBar from './compnents/NavigationBar';
import MyAccount from './Screens/MyAccount';
import { LandingPage } from './PEJ/LandingPage';
import OnboardingScreen from './PEJ/OnboardingScreen';
const Stack = createStackNavigator()

export default function App() {
  // [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      {/* <NavigationBar/> */}
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen options={{ headerShown: false }} name="LandingPage" component={LandingPage} />
        <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignIn} />
        <Stack.Screen options={{ headerShown: false }} name='User SignUp' component={UserSignUp} />
        <Stack.Screen options={{ headerShown: false }} name='Vendor SignUp' component={VendorSignUp} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={NavigationBar} />
        <Stack.Screen options={{ headerShown: false }} name='Checkout' component={Checkout} />
        <Stack.Screen options={{ headerShown: false }} name='Confirmation' component={Confirmation} />
        <Stack.Screen options={{ headerShown: false }} name='My Account' component={MyAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Button, Text, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartPlus, faGear, faHeart, faHouse, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../Screens/HomePage';
import FavouritePage from '../Screens/FavouritePage';
import Cart from '../Screens/Cart';
import SettingsPage from '../Screens/SettingsPage';

const Tab = createBottomTabNavigator();

export default NavigationBar= () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false, tabBarShowLabel:false}}>
            <Tab.Screen name='HomePage' component={HomePage} options={{ 
                tabBarIcon: () => ( <FontAwesomeIcon size={20} icon={faHouse} style={{ position: 'absolute', left: 15 }} />),
                
            }}/>
            <Tab.Screen name='Favourite' component={FavouritePage} options={{
                tabBarIcon: () => ( <FontAwesomeIcon size={20} icon={faHeart} style={{ position: 'absolute', left: 15 }} />)
            }}/>
            <Tab.Screen name='Cart' component={Cart} options={{
                tabBarIcon: () => ( <FontAwesomeIcon size={20} icon={faCartPlus} style={{ position: 'absolute', left: 15 }} />)
            }}/>
            <Tab.Screen name='Settings' component={SettingsPage} options={{
                tabBarIcon: () => ( <FontAwesomeIcon size={20} icon={faGear} style={{ position: 'absolute', left: 15 }} />)
            }}/>
        </Tab.Navigator>
    )
}


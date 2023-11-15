import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default Favourite = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex:1 }} >
                <View style={{ alignItems: 'center', marginTop: "10%", padding:10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Favourite</Text>
                </View>
        </SafeAreaView>
    
    );
    

};

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default HomePage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'flex-start', marginTop: "10%", padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>What Would You Want To Eat?</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 5 }}>
                    <FontAwesomeIcon size={20} icon={faBars} style={{ position: 'relative', left: 0, padding: 5 }} />
                    <Text style={{ fontWeight: 'bold' }}>Menu</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon size={20} icon={faSearch} style={{ position: 'absolute', left: 20, padding: 5 }} />
                    <TextInput
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            margin: 10,
                            height: 35,
                            width: 350,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: 40,
                            paddingLeft: 50
                        }}
                        placeholder='Search foods, drinks and snacks'
                        placeholderTextColor='black'
                    // onChange={(newText) => { setName(newText) }}
                    // value={name}
                    />
                </View>
            </View>
        </SafeAreaView>

    );


};

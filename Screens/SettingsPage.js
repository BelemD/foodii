import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faArrowUpFromBracket, faChevronRight, faCircleQuestion, faClose, faCompass, faEnvelope, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';


const SettingsCard = ({ icon, description, arrow, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 5, margin: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', elevation: 2 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 35 }}>
                    {icon}
                    <Text>{description}</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }} >
                    {arrow}
                </View>
            </View>
        </TouchableOpacity>
    );
}


export default SettingsPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: "10%", flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ marginRight: "30%", padding: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HomePage') }}>
                        <FontAwesomeIcon size={25} icon={faClose} style={{ position: 'relative', left: 0, padding: 5 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Settings</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <SettingsCard onPress={() => { navigation.navigate('My Account') }} icon={<FontAwesomeIcon style={{ marginLeft: 10, marginRight: 20 }} size={20} icon={faAddressBook} />} description='My Account' arrow={<FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 10 }} />} />
                <SettingsCard icon={<FontAwesomeIcon style={{ marginLeft: 10, marginRight: 20 }} size={20} icon={faCompass} />} description='My Orders' arrow={<FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 10 }} />} />
                <SettingsCard icon={<FontAwesomeIcon style={{ marginLeft: 10, marginRight: 20 }} size={20} icon={faCircleQuestion} />} description='Help' arrow={<FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 10 }} />} />
                <SettingsCard icon={<FontAwesomeIcon style={{ marginLeft: 10, marginRight: 20 }} size={20} icon={faArrowUpFromBracket} />} description='Upgrade' arrow={<FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 10 }} />} />
                <SettingsCard onPress={() => { navigation.navigate('Order Tracking') }} icon={<FontAwesomeIcon style={{ marginLeft: 10, marginRight: 20 }} size={20} icon={faLocationCrosshairs} />} description='Order Tracking' arrow={<FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 10 }} />} />
            </View>
            <View style={{ marginTop: 230, marginBottom: 50 }}>
                <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 10, justifyContent: 'center' }} >
                    <Button onPress={() => { navigation.navigate('SignIn') }} color={'black'} title='Sign Out' />
                </View>
            </View>
        </SafeAreaView>

    );


};

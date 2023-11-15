import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faArrowUpFromBracket, faBell, faChevronRight, faCircleQuestion, faCompass, faEnvelope, faLocationCrosshairs, faLocationDot, faMoon } from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from 'toggle-switch-react-native';

const Card = ({ icon, description, arrow, toggle,text, onPress }) => {
    return (
        <View style={isDarkMode?  { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 5, margin: 10, backgroundColor: '#343434', elevation: 2 }:{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 5, margin: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', elevation: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 35 }}>
                {<FontAwesomeIcon style={isDarkMode?{ marginLeft: 10, marginRight: 20, color:'white' } :{ marginLeft: 10, marginRight: 20 }} size={20} icon={icon} />}
                <Text style={isDarkMode?{color:'white'} :{color:'black'}}>{description}</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }} >
                {<FontAwesomeIcon icon={arrow} style={isDarkMode? { marginRight: 10, color:'white' } :{ marginRight: 10 }} />}
                {text}
                {toggle}
            </View>
        </View>
    );
}
const TextElements = ({input}) => {
    return (
        <Text style={isDarkMode ? { fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic', color:'white' } : { fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic' } }>{input}</Text>
    )
}


export default MyAccount = ({ navigation }) => {
    [isNotificationOn, setIsNotificationOn] = useState(true);
    [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <SafeAreaView style={isDarkMode ? { backgroundColor: '#000000', flex: 1 } : { backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: "5%", padding: 10 }}>
                <Text style={isDarkMode? { fontWeight: 'bold', fontSize: 20, color:'white' }: { fontWeight: 'bold', fontSize: 20 }}>My Account</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ padding: 10 }}>
                    <Image style={{ borderRadius: 70, height: 140, width: 140 }} source={require('../assets/myAvatar.png')}></Image>
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 40 }}>
                    <TextElements input='Kukuru Christian' />
                    <TextElements input='+23409015816285' />
                    <TextElements input='Kukuruchristian@gmail.com' />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Card icon={faCompass} description='Orders' arrow={faChevronRight} />
                <Card icon={faLocationDot} description='Address' arrow={faChevronRight} />
                <Card icon={faCompass} description='My Orders' arrow={faChevronRight} />
                <Card icon={faCircleQuestion} description='Help' arrow={faChevronRight} />
                <Card icon={faBell} description='Notification' toggle={<ToggleSwitch onColor='#FF6600' isOn={isNotificationOn} onToggle={() => { setIsNotificationOn(!isNotificationOn) }} />} />
                <Card icon={faLocationCrosshairs} description='Language' text={<Text style={{ color: '#FF6600' }}>Eng(US)</Text>} />
                <Card icon={faMoon} description='Dark Mode' toggle={<ToggleSwitch onColor='#FF6600' isOn={isDarkMode} onToggle={() => { setIsDarkMode(!isDarkMode) }} />} />
            </View>
            {/* <View style={{ marginTop: 230, marginBottom: 50 }}>
                    <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 10, justifyContent: 'center' }} >
                        <Button onPress={()=> {navigation.navigate('SignIn')}} color={'black'} title='Sign Out' />
                    </View>
                </View> */}
        </SafeAreaView>

    );


};

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faChevronLeft, faChevronRight, faCircleQuestion, faClock, faClose, faCompass, faLocationCrosshairs, faLocationDot, faMessage, faMobileScreen, faMoon } from '@fortawesome/free-solid-svg-icons';


export default OrderTracking = ({ navigation }) => {
    return (
        <SafeAreaView >
            <View style={{ alignItems: 'center', marginTop: "5%", padding: 10, flexDirection: 'row' }}>
                <View style={{ marginRight: "30%", padding: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
                        <FontAwesomeIcon size={20} icon={faChevronLeft} style={{ position: 'relative', left: 0, padding: 5 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Order Tracking</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20 }}>Status</Text>
            </View>
            <View style={{ flexDirection: 'column', padding: 5, margin: 10, borderTopWidth: 1, borderBottomWidth: 1, paddingTop: 30, paddingBottom: 30 }}>
                <Text style={{ fontSize: 20, marginBottom: 15, }}>Route Details</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text>Estimated Distance</Text>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <FontAwesomeIcon size={15} icon={faLocationDot} style={{ marginLeft: 5 }} />
                            <Text>3.8km</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Estimated Arrival</Text>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <FontAwesomeIcon size={15} icon={faClock} style={{ marginRight: 5 }} />
                            <Text>30 Minutes</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Contact Driver</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ borderRadius: 70, height: 50, width: 50, margin: 5 }} source={require('../assets/driver.png')}></Image>
                        <Text>John Iseh</Text>
                    </View>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon size={15} icon={faMessage} style={{ marginRight: 20 }} />
                        <FontAwesomeIcon size={15} icon={faMobileScreen} style={{ marginRight: 10 }} />
                    </View>

                </View>
            </View>
            <View style={{ marginTop: 230, marginBottom: 50 }}>
                <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center' }} >
                    <Button onPress={() => { navigation.navigate('HomePage') }} color={'#FF6600'} title='Go To Homepage' />
                </View>
            </View>
        </SafeAreaView>

    );


};

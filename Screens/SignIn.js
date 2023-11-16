import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default SignIn = ({ navigation }) => {
    [emailInput, setEmailInput] = useState("");
    [passwordInput, setPasswordInput] = useState("");
    const [isVisible, setIsVisible] = useState(false)

    const togggleModal = () => {
        setIsVisible(!isVisible);
    };

    function handleClick() {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView>
            <View>
                <ImageBackground style={{ position: 'absolute', width: 180, zIndex: -1, right: 0, height: 350, marginTop: 150 }} resizeMode='contain' source={require('../PEJ/Images/AdobeStock1.png')} >
                </ImageBackground>
                <View style={{ alignItems: 'center', marginTop: "30%", }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sign In </Text>
                </View>
                <View style={{ marginTop: 100,  alignItems:'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon size={20} icon={faEnvelope} style={{ position: 'absolute', left: 20 }} />
                        <TextInput
                            style={{
                                flexDirection: 'row',
                                padding: 10,
                                margin: 10,
                                height: 50,
                                width: 400,
                                borderColor: 'black',
                                borderWidth: 2,
                                borderRadius: 15,
                                paddingLeft: 50
                            }}
                            placeholder='Email'
                            placeholderTextColor='black'
                            onChangeText={(text) => { setEmailInput(text) }}
                            value={emailInput}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon size={20} icon={faLock} style={{ position: 'absolute', left: 20 }} />
                        <TextInput
                            style={{
                                padding: 10,
                                margin: 10,
                                height: 50,
                                width: 400,
                                borderColor: 'black',
                                borderWidth: 2,
                                borderRadius: 15,
                                paddingLeft: 50,
                                color: 'black'
                            }}
                            secureTextEntry={true}
                            placeholder='Password'
                            placeholderTextColor='black'
                            onChange={(newText) => { setPasswordInput(newText) }}
                            value={passwordInput}

                        />
                    </View>
                </View>
                <View style={{ marginTop: 200, marginBottom: 50 }}>
                    <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 15, justifyContent: 'center' }} >
                        <Button onPress={handleClick} color={'white'} title='Sign In' />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ padding: 10, fontSize: 15, fontWeight: 'bold' }}>
                            Sign in With
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <FontAwesomeIcon size={15} style={{ paddingTop: 15, paddingBottom: 20, paddingRight: 100 }} icon={faGoogle} />
                            <FontAwesomeIcon size={15} style={{ paddingTop: 15, paddingBottom: 20, paddingLeft: 100 }} icon={faFacebookF} />
                        </View>
                    </View>
                    <View style={{ height: 50, justifyContent: 'center', borderColor: '#000000', borderWidth: 1, margin: 10, backgroundColor: 'white', borderRadius: 15 }} >
                        <Button onPress={togggleModal} color={'black'} title='Create Account' />
                    </View>
                    <Modal animationType='slide' transparent={true} onRequestClose={togggleModal} visible={isVisible} >
                        <View style={{ flex: 0.9, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white', marginTop: 600 }} >
                            <View style={{ borderColor: 'rgba(0, 0, 0, 0.1)', padding: 50, borderRadius: 10, elevation: 5, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ position: 'relative', marginRight: 300, marginBottom: 50 }} onPress={togggleModal}>
                                    <FontAwesomeIcon style={{ marginTop: 10 }} size={30} icon={faXmark} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 20 }} >Sign Up: </Text>
                                <Button onPress={() => { navigation.navigate('User SignUp'), togggleModal() }} color={'black'} title='User' />
                                <Button onPress={() => { navigation.navigate('Vendor SignUp'), togggleModal() }} color={'black'} title='Vendor' />
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>

    );

};

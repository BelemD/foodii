import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import SignIn from './SignIn';



export default UserSignUp = ({navigation}) => {
    // [fullName, setFullName] = useState('')
    // [email, setEmail] = useState('');
    // [password, setPassword] = useState('');

    // function handleClick() {
    //     if (email&& password !== '') {
    //         Alert.alert(`Welcome ${email}`)
    //     } else {
    //         Alert.alert(`Fields cannot be empty`)
    //     }

    // }

    return (
        <SafeAreaView> 
            <ImageBackground style={{position:'absolute', flex:1, justifyContent:'center'}} resizeMode='cover' source={require('../assets/pizza2.png')} >           
            <View style={{ alignItems: 'center', marginTop: 100, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Create Account</Text>
                <Text style={{ fontSize: 20, padding:10 }}>User</Text>
            </View>
            <View style={{ marginTop: 150 }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesomeIcon size={20} icon={faAddressBook} style={{position:'absolute', left:20}}/>
                <TextInput
                    style={{
                        padding: 10,
                        margin: 10,
                        height: 50,
                        width:400,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 15,
                        paddingLeft:50,
                        color:'black'
                    }}
                    placeholder='Full Name'
                    placeholderTextColor='black'
                    // onChange={(newText) => { setName(newText) }}
                    // value={name}
                />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}> 
                <FontAwesomeIcon size={20} icon={faEnvelope} style={{position:'absolute', left:20}}/>
                <TextInput
                    style={{
                        flexDirection:'row',
                        padding: 10,
                        margin: 10,
                        height: 50,
                        width:400,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 15,
                        paddingLeft:50
                    }}
                    placeholder='Email'
                    placeholderTextColor='black'
                    // onChangeText={(text) => { setEmail(text) }}
                    // value={email}
                />
                </View>
                
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesomeIcon size={20} icon={faLock} style={{position:'absolute', left:20}}/>
                <TextInput
                    style={{
                        padding: 10,
                        margin: 10,
                        height: 50,
                        width:400,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 15,
                        paddingLeft:50,
                        color:'black'
                    }}
                    placeholder='Password'
                    placeholderTextColor='black'
                    secureTextEntry={true}
                    // onChange={(newText) => { setPassword(newText) }}
                    // value={password}
                />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesomeIcon size={20} icon={faUnlock} style={{position:'absolute', left:20}}/>
                <TextInput
                    style={{
                        padding: 10,
                        margin: 10,
                        height: 50,
                        width:400,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 15,
                        paddingLeft:50,
                        color:'black'
                    }}
                    placeholder='Confirm Password'
                    placeholderTextColor='black'
                    secureTextEntry={true}
                    // onChange={(newText) => { setConfirmPassword(newText) }}
                    // value={password}
                />
                </View>
            </View>
            <View style={{ marginTop: 100, marginBottom:50 }}>
                <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 15, justifyContent: 'center' }} >
                    <Button onPress={() => { }} color={'white'} title='Create Account' />
                </View>
                <View style={{ height: 50, justifyContent: 'center', borderColor: '#000000', borderWidth: 1, margin: 10, backgroundColor: 'white', borderRadius: 15 }} >
                    <Button onPress={() => {navigation.navigate('SignIn')}} color={'black'} title='Sign In' />
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
   
};


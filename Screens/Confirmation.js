import React, { useState } from 'react';
import {  View, Image, ScrollView, TextInput, SafeAreaView, Button, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';



export default Confirmation = () => {

    return (
        <SafeAreaView>
            <View style={{ alignItems: 'center', marginTop: 50, justifyContent:'center' }}>
            <View style={{ height: "50%",width:"70%", borderColor: '#FF6600', margin: 10, backgroundColor: '#FF6600', borderRadius: 360, justifyContent: 'center', alignItems:'center' }} >
            <FontAwesomeIcon size={150} icon={faCheck} style={{ position: 'relative'}} />
            </View>
            <View style={{marginTop:70, alignItems:'center'}}>
                <Text style={{ fontSize: 20, fontFamily:'AvenirNextCondensed-Italic' }}>Congratulations!</Text>
                <Text style={{ fontSize: 20, fontFamily:'AvenirNextCondensed-Italic' }}>Your Order Placed Successfully</Text>
                <Text style={{ fontSize: 20, fontFamily:'AvenirNextCondensed-Italic' }}>Your Order Number is</Text>
                <Text style={{ fontSize: 20, fontFamily:'AvenirNextCondensed-Italic' }}>RE-2780319</Text>
                </View>
            </View>
            
            <View style={{ marginTop: "20%", marginBottom: 50 }}>
                <View style={{ height: 50, justifyContent: 'center', borderColor: '#000000', borderWidth: 1, margin: 10, backgroundColor: 'white', borderRadius: 10,}} >
                <FontAwesomeIcon size={20} icon={faArrowRight} style={{ position: 'absolute', left: 15 }} />
                    <Button onPress={() => { }} color={'black'} title='My Orders' />
                </View>
            </View>
        </SafeAreaView>
    );
};

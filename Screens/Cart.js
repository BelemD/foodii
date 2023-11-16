import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = [
    {},
    {},
    {}
]



const CartCard = ({ image, description, price }) => {
    return (
        <View style={{justifyContent:'space-between' ,alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 5, margin: 5, backgroundColor: 'rgba(0, 0, 0, 0.1)', elevation: 2 }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{ height: 40, width: 40, borderRadius: 360, marginRight:15 }} source={{ uri: image }} />
            <Text>{description}</Text>
            </View>
            <View style={{justifyContent:'flex-end'}} >
            <Text>{price}</Text>
            </View>
        </View>
    );
}

export default Cart = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex:1 }} >          
            <View style={{ alignItems: 'center', marginTop: "5%", }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Cart </Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <CartCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjraimv-PtoEJrk6hgA2lw9N1gFSN689eRXw&usqp=CAU' description='Cheese Pizza' price='$10' />
                <CartCard image='https://img.taste.com.au/M8fxpuu9/taste/2016/11/beef-burgers-with-double-fried-chips-100842-1.jpeg' description='Burger & Chips' price='$8' />
                <CartCard image='https://static.toiimg.com/thumb/msid-80850219,width-1280,resizemode-4/80850219.jpg' description='Fruit Juice' price='$5' />
                <View style={{marginTop:30, marginBottom:30}}>
                <View style={{flexDirection:'row', justifyContent:'space-between',padding:10}}>
                    <Text>Sub Total</Text>
                    <Text>$23</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between' ,padding:10}}>
                    <Text>Delivery</Text>
                    <Text>$2</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',padding:10}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Total</Text>
                    <Text style={{fontWeight:'bold', fontSize:20}}>$25</Text>
                </View>
                </View>
                <View style={{marginTop:240, height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 15, justifyContent: 'center' }} >
                    <Button onPress={() => { navigation.navigate('Checkout') }} color={'black'} title='Checkout' />
                </View>
            </View>
        </SafeAreaView>

    );

};

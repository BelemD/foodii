import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cartData = [
    { id: 1, title: 'Cheese Pizza', price: '$10', imageSource: require('../assets/pizza3.png') },
    { id: 2, title: 'Burger & Chips', price: '$8', imageSource: require('../assets/burger.png') },
    // { id: 3, title: 'Shrimps', price: '$12', imageSource: require('../assets/shrimp.png') },
    { id: 4, title: 'Fruit Juice', price: '$5', imageSource: require('../assets/juice.png') }
]



const CartCard = ({ image, title, price }) => {
    return (
        <View style={{justifyContent:'space-between' ,alignItems: 'center', flexDirection: 'row', borderRadius: 10, padding: 5, margin: 5, backgroundColor: 'rgba(0, 0, 0, 0.1)', elevation: 2 }}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{ height: 40, width: 40, borderRadius: 360, marginRight:15 }} source={ image } />
            <Text>{title}</Text>
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
            <View style={{ marginTop: "5%" }}>
                <ScrollView>
                {
                cartData.map((item)=>(
                    <CartCard key={item.id} title={item.title} price={item.price} image={item.imageSource} />
                ))
                }
                </ScrollView>
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

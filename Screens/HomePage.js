import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const data = [
    { id: 1, title: 'Cheese Pizza', price: '$10', imageSource: require('../assets/pizza3.png') },
    { id: 2, title: 'Burger & Chips', price: '$8', imageSource: require('../assets/burger.png') },
    { id: 3, title: 'Shrimps', price: '$12', imageSource: require('../assets/shrimp.png') },
    { id: 4, title: 'Fruit Juice', price: '$5', imageSource: require('../assets/juice.png') }
]

const FoodCard = ({ image, title, price }) => {
    return (
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', elevation: 5, width: 200, height: 300, justifyContent: 'center', borderRadius: 10, alignItems: 'center', padding: 4, margin: 4, shadowColor: '#000', }}>
            <View>
                <Image style={{ height: 200, width: 200, borderRadius: 5, marginBottom: 10 }} source={image} resizeMode='contain' ></Image>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ padding: 10, marginTop: 5 }}>{title}</Text>
                    <Text style={{ padding: 10, marginTop: 5 }}>{price}</Text>
                </View>
                <Image style={{ height: 20, width: 100, padding: 10, marginLeft: 5 }} source={require('../assets/rating.png')}></Image>
            </View>
            <View style={{ width: 180, height: 25, borderColor: '#FF6600', margin: 15, backgroundColor: '#FF6600', borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
                {/* <Button onPress={()=>{}} color={'black'} title='Add To Cart' /> */}
                <TouchableOpacity>
                    <Text>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




export default HomePage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'flex-start', marginTop: "3%", padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>What Would You Want To Eat?</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('My Account') }}>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 5 }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} style={{ position: 'relative', left: 0, padding: 3 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon size={20} icon={faSearch} style={{ position: 'absolute', left: 20, padding: 5 }} />
                    <TextInput
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            margin: 10,
                            height: 35,
                            width: 340,
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
            <ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 20 }}>Food Menu</Text>
                {pair(data, 2).map((row, index) => (
                    <View key={index} style={index % 2 === 0 ? { flexDirection: 'row', justifyContent: 'space-between', width: "90%", marginBottom: 10 } : { flexDirection: 'row', justifyContent: 'space-between', width: "90%", marginBottom: 15 }}>
                        {row.map((item) => (
                            <FoodCard key={item.id} title={item.title} price={item.price} image={item.imageSource} />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>

    );
};

const pair = (array, size) => {
    const result = [];
    for (i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result
}
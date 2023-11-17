import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faClock, faFire, faHeart, } from '@fortawesome/free-solid-svg-icons';

const data = [
    { id: 1, title: 'Cheese Pizza', price: '$10', imageSource: require('../assets/pizza3.png'), details: "The delicious combination of crispy pizzo crust flavorful tomato sauce and bubbly cheese make for an unbeatable combination. Even if you're a fan of unique toppings, its hard to resist a slice of plain cheese pie!" },
]

const FoodDetailsCard = ({ image, title, price, details }) => {
    const [numb, setNum] = useState(1)
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, margin: 5, }}>
                <Image style={{ height: 320, width: 500, borderRadius: 5, marginBottom: 10 }} source={image} resizeMode='contain' ></Image>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ padding: 10, marginTop: 5 }}>{title}</Text>
                <Text style={{ padding: 10, marginTop: 5 }}>{price}</Text>
                <View style={{ width: 100, height: 25, borderColor: '#FF6600', margin: 10, backgroundColor: '#FF6600', borderRadius: 5, justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexDirection: 'row' }} >
                    <TouchableOpacity onPress={() => { numb === 1 ? null : setNum(numb - 1) }} >
                        <Text style={{ marginLeft: 10 }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} >
                        <Text style={{ padding: 3 }}>{numb}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setNum(numb + 1) }} >
                        <Text style={{ marginRight: 10 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon size={15} icon={faFire} style={{ padding: 5, marginLeft: 10 }} />
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>55 Calories</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon size={15} icon={faClock} style={{ padding: 5, marginLeft: 10 }} />
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>30-35 Minutes</Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Details</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 15 }}>{details}</Text>
            </View>
        </View>

    )
}




export default DetailPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: "10%", flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('HomePage') }}>
                        <FontAwesomeIcon size={25} icon={faChevronLeft} style={{ padding: 5 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cheeze Pizza</Text>
                <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={() => { }}>
                        <FontAwesomeIcon size={25} icon={faHeart} style={{ left: 0, padding: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {data.map((item) => (
                    <FoodDetailsCard key={item.id} title={item.title} price={item.price} image={item.imageSource} details={item.details} />
                ))}
            </View>
            <View style={{ marginTop: 100, height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 15, justifyContent: 'center' }} >
                <Button onPress={() => {navigation.navigate('Cart') }} title='Add To Cart' color={'black'} />
            </View>
        </SafeAreaView>

    );
};


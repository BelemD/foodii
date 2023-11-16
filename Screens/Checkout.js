import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook, faLocationDot, faMobileScreen, faCreditCard, faAddressCard, faUserShield } from '@fortawesome/free-solid-svg-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default Checkout = ({navigation}) => {
    const [isCardChecked, setCardChecked] = useState(false)
    const [isCashChecked, setCashChecked] = useState(false)
    const [isDetailsChecked, setSaveDetails] = useState(false)


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
            <View style={{ alignItems: 'center', marginTop: 50, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Checkout</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 20, padding: 10 }}>Delivery</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesomeIcon size={20} icon={faLocationDot} style={{ position: 'absolute', left: 15 }} />
                    <TextInput
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            margin: 8,
                            height: 40,
                            width: 400,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: 15,
                            paddingLeft: 50
                        }}
                        placeholder='Delivery Address'
                        placeholderTextColor='black'
                    // onChange={(newText) => { setName(newText) }}
                    // value={name}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesomeIcon size={20} icon={faMobileScreen} style={{ position: 'absolute', left: 15 }} />
                    <TextInput
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            margin: 8,
                            height: 40,
                            width: 400,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: 15,
                            paddingLeft: 50,
                            marginBottom:10
                        }}
                        placeholder='Phone Number'
                        placeholderTextColor='black'
                    // onChangeText={(text) => { setLocation(text) }}
                    // value={location}
                    />
                </View>

            </View>
            <View style={{ borderTopWidth: 1, paddingTop: 40 }} >
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <BouncyCheckbox
                        checked={isCardChecked}
                        size={20}
                        fillColor="#FF6600"
                        unfillColor="rgba(0, 0, 0, 0.2)"
                        text="Credit Card"
                        iconStyle={isCardChecked ? {backgroundColor:"#FF6600" } : { borderColor: "rgba(0, 0, 0, 0.2)" }}
                        innerIconStyle={{ borderWidth: 0 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", color: 'black', textDecorationLine: 'none' }}
                        
                        onPress={() => {
                            setCardChecked(!isCardChecked)
                            setCashChecked(false)
                        }
                    }
                    disableBuiltInState={true}
                    />
                    <BouncyCheckbox
                        checked={isCashChecked}
                        size={20}
                        fillColor="#FF6600"
                        unfillColor="rgba(0, 0, 0, 0.2)"
                        text="Cash on Delivery"
                        iconStyle={isCashChecked ? {backgroundColor:"#FF6600" } : { borderColor: "rgba(0, 0, 0, 0.2)" }}
                        innerIconStyle={{ borderWidth: 0 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular", color: 'black', textDecorationLine: 'none' }}
                        onPress={() => {
                            setCashChecked(!isCashChecked)
                            setCardChecked(false)
                        }}
                        disableBuiltInState={true}
                    />
                </View>
                {isCashChecked &&
                    <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize: 20, fontFamily: 'AvenirNextCondensed-Italic', padding:10 }}>Payment On Delivery</Text>
                    </View>}
                {isCardChecked &&
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon size={20} icon={faAddressBook} style={{ position: 'absolute', left: 15 }} />
                            <TextInput
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    margin: 10,
                                    height: 40,
                                    width: 400,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 10,
                                    paddingLeft: 50
                                }}
                                placeholder='Cardholder Name'
                                placeholderTextColor='black'
                            // onChange={(newText) => { setCardholder(newText) }}
                            // value={cardholder}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon size={20} icon={faCreditCard} style={{ position: 'absolute', left: 15 }} />
                            <TextInput
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    margin: 10,
                                    height: 40,
                                    width: 400,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 10,
                                    paddingLeft: 50
                                }}
                                placeholder='Card Number'
                                placeholderTextColor='black'
                            // onChange={(newText) => { setCardNumber(newText) }}
                            // value={CardNumber}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon size={20} icon={faAddressCard} style={{ position: 'absolute', left: 15 }} />
                            <TextInput
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    margin: 10,
                                    height: 40,
                                    width: 250,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 10,
                                    paddingLeft: 50
                                }}
                                placeholder='Expiry Date'
                                placeholderTextColor='black'
                            // onChange={(newText) => { setConfirmPassword(newText) }}
                            // value={password}
                            />
                            <TextInput
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    margin: 10,
                                    height: 40,
                                    width: 130,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 10,
                                    paddingLeft: 50
                                }}
                                placeholder='CVV'
                                placeholderTextColor='black'
                            // onChange={(newText) => { setConfirmPassword(newText) }}
                            // value={password}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon size={20} icon={faUserShield} style={{ position: 'absolute', left: 15 }} />
                            <TextInput
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    margin: 10,
                                    height: 40,
                                    width: 400,
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: 10,
                                    paddingLeft: 50
                                }}
                                placeholder='Card Pin'
                                placeholderTextColor='black'
                            // onChange={(newText) => { setCardPin(newText) }}
                            // value={CardPin}
                            />
                        </View>
                        <View style={{ padding: 10 }}>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#FF6600"
                                unfillColor="rgba(0, 0, 0, 0.2)"
                                text="Save my details"
                                iconStyle={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                                innerIconStyle={{ borderWidth: 0 }}
                                textStyle={{ fontFamily: "JosefinSans-Regular", color: 'black', textDecorationLine: 'none' }}
                                onPress={() => { setSaveDetails(!isDetailsChecked) }}
                            />
                        </View>
                    </View>
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, marginBottom: 0 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>Total</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>$25</Text>
            </View>
            <View style={{ marginTop: 10, marginBottom: 50 }}>
                <View style={{ height: 50, borderColor: '#FF6600', borderWidth: 1, margin: 10, backgroundColor: '#FF6600', borderRadius: 10, justifyContent: 'center' }} >
                    <Button onPress={() => {navigation.navigate('Confirmation') }} color={'black'} title='Confirm' />
                </View>
                {/* <View style={{ height: 50, justifyContent: 'center', borderColor: '#000000', borderWidth: 1, margin: 10, backgroundColor: 'white', borderRadius: 10,}} >
                    <Button onPress={() => { }} color={'black'} title='Sign In' />
                </View> */}
            </View>
        </SafeAreaView>
    );
};

import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView, Button, Alert, Text, ImageBackground, TouchableOpacity, Modal } from 'react-native';

export default ModalComponent = ({ isVisible, togggleModal }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, elevation: 5, }}>
                <Modal visible={isVisible} transparent={false} onRequestClose={togggleModal} animationType='slide'>
                    <TouchableOpacity onPress={() => { }}> </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}> </TouchableOpacity>
                </Modal>
            </View>
            <TouchableOpacity onPress={togggleModal}></TouchableOpacity>
        </View>
    )
}


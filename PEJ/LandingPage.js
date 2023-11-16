//import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, StatusBar, Image, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export function LandingPage({navigation}) {
    useEffect(()=> {
        const timeout = setTimeout(()=>{
            navigation.navigate('OnboardingScreen')
        }, 4000);
        return ()=> clearTimeout(timeout);
    },[navigation])
    const { height, width } = useWindowDimensions()
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./Images/Frame20.png")}
        style={
          {
            width: 150,
            height: 100,
          }
        }
        resizeMode='contain'
      />
      <Text
        style={[styles.text,
        {
          fontSize: 20,
        }
        ]}>
        Delicious Food Everyday
      </Text>
      <StatusBar barStyle="light-content" backgroundColor='#FF6600' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '400'
  },
});
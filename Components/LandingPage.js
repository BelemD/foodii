//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, StatusBar, Image, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const logo = require("../Images/Frame-20.png")


export function LandingPage() {
  const { height, width } = useWindowDimensions()
  console.log({ height, width })
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logo}
        style={
          {
            width: width > 500 ? '100%' : "30%",
            height: height > 600 ? 75 : 100,
            marginBottom: height > 600 ? 10 : 10
          }
        }
        resizeMode='contain'
      />
      <Text
        style={[styles.text,
        {
          fontSize: width > 500 ? 32 : 16,
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
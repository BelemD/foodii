import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions, FlatList, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import React from 'react'

const { width, height } = Dimensions.get('window');

const onboardingSlides = [{
  id: 1,
  image: require("./Images/Ellipse2.png"),
  title: 'Explore',
  subTitle: 'Your Favourite Dishes',
  buttonText: "Skip"
}, {
  id: 2,
  image: require("./Images/Rectangle46.png"),
  title: 'Choose',
  subTitle: 'What You Want From Our Menu',
  buttonText: "Skip"
}, {
  id: 3,
  image: require("./Images/Ellipse1.png"),
  title: 'Order',
  subTitle: 'From the comfort Of your home',
  buttonText: "Get Started"
}];

function Slide({ item }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={item.image}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
    </View>
  )
}

export default function OnboardingScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef(null);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onboardingSlides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  function Footer() {
    return (
      <View style={{
        height: height * 0.37,
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20
        }}>
          {onboardingSlides.map((_, index) =>
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#FF6600',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginHorizontal: 8
                }
              ]}
            />)}
        </View>
        {
          currentSlideIndex == onboardingSlides.length - 1 ?
            (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 90
              }}>
                <TouchableOpacity
                  style={styles.button}
                  // you can't go back
                  //onPress={() => navigation.replace('LangingPage')}>
                  //you can go back
                  onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              </View>
            ) :
            (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 90
              }}>
                <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
                  <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <FlatList
        ref={ref}
        data={onboardingSlides}
        horizontal
        //contentContainerStyle={{height : height * 0.75}}
        renderItem={({ item }) => <Slide item={item} />}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
      />
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 100,
    marginTop: 90,
    resizeMode: "contain",
    height: '40%',
    width,
  },
  title: {
    color: '#FF6600',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "500",
  },
  subTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: 'center',
    width: "65%",
    // padding: 10,
    borderRadius: 10,
    borderColor: '#FF6600',
    backgroundColor: "transparent",
    borderWidth: 1
  },
  buttonText: {
    color: '#FF6600',
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center"
  },
  indicator: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 8
  }
});


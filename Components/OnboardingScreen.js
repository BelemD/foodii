import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions, FlatList, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import React from 'react'

const { width, height } = Dimensions.get('window');

const onboardingSlides = [{
  id: 1,
  title: 'Explore',
  subTitle: 'Your Favourite Dishes',
  image: require("../Images/Ellipse-2.png"),
  buttonText: "Skip"
}, {
  id: 2,
  title: 'Choose',
  subTitle: 'What you want from our menu',
  image: require("../Images/Rectangle-46.png"),
  buttonText: "Skip"
}, {
  id: 3,
  title: 'Order',
  subTitle: 'From the comfort of your home',
  image: require("../Images/Ellipse-1.png"),
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

export default function OnboardingScreen({navigation}) {
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
                onPress={() => navigation.navigate('LangingPage')}> 
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
    marginBottom: 45,
    marginTop: 90,
    resizeMode: "contain",
    // height: '75%',
    width,
  },
  title: {
    color: '#FF6600',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "500",
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
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


// const onboardingSlides = [{
//   id: 1,
//   title: 'Explore',
//   subTitle: 'Your Favourite Dishes',
//   image: require("../Images/Ellipse-2.png"),
// }, {
//   id: 2,
//   title: 'Choose',
//   subTitle: 'What you want from our menu',
//   image: require("../Images/Rectangle-46.png"),
// }, {
//   id: 3,
//   title: 'Order',
//   subTitle: 'From the comfort of your home',
//   image: require("../Images/Ellipse-1.png"),
// }];


// export default function OnboardingScreen() {
//   const { height, width } = useWindowDimensions()

//   function Slides({ item }) {
//     return (
//       <View style={{ alignItems: 'center' }}>
//         <Image
//           source={item.image}
//           style={{ height: '40%', width, marginTop: 90, marginBottom: 45 }}
//           // style={styles.image}
//           resizeMode='contain'
//         />
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.subTitle}>{item.subTitle}</Text>
//       </View>
//     )
//   }

//   function Footer() {
//     <View style={{
//       height: height * 0.25,
//       backgroundColor: 'red',
//       justifyContent: 'space-between',
//       paddingHorizontal: 20
//     }}>
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 20
//       }}>
//         <View style={[styles.indicator]}/>
//       </View>
//     </View>
//   }      

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//       <StatusBar barStyle="dark-content" backgroundColor='white' />
//       <FlatList
//         data={onboardingSlides}
//         contentContainerStyle={{ height: height * 0.75, backgroundColor: '#f5f5f5' }}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => <Slides item={item} />}
//         pagingEnabled
//       />
//       <Footer />
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     backgroundColor: 'white',
//   //     alignItems: 'center',
//   //     justifyContent: 'center',
//   //   },
//   //   image: {
//   //     marginBottom: 45,
//   //     marginTop: 90,
//   //     resizeMode: "contain",
//   //     // height: '75%',
//   //     width,
//   //   },
//   title: {
//     color: '#FF6600',
//     fontSize: 24,
//     marginTop: 20,
//     marginBottom: 5,
//     fontWeight: "500",
//   },
//   subTitle: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: "400",
//   },
//   //   button: {
//   //     height: 50,
//   //     justifyContent: "center",
//   //     alignItems: 'center',
//   //     width: "65%",
//   //     // padding: 10,
//   //     borderRadius: 10,
//   //     borderColor: '#FF6600',
//   //     backgroundColor: "transparent",
//   //     borderWidth: 1
//   //   },
//   //   buttonText: {
//   //     color: '#FF6600',
//   //     fontSize: 20,
//   //     fontWeight: "400",
//   //     textAlign: "center"
//   //   },
//     indicator: {
//       width: 13,
//       height: 13,
//       borderRadius: 7,
//       backgroundColor: '#D9D9D9',
//       marginHorizontal: 8
//     }
// });

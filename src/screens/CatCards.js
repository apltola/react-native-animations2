import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Cat1 from '../../assets/cat1.jpg';
import Cat2 from '../../assets/cat2.jpg';
import Cat3 from '../../assets/cat3.jpg';
import Cat4 from '../../assets/cat4.jpg';
import Cat5 from '../../assets/cat5.jpg';

const DATA = [
  { image: Cat1, id: 1, text: 'kissi' },
  { image: Cat2, id: 2, text: 'kissi' },
  { image: Cat3, id: 3, text: 'kissi' },
  { image: Cat4, id: 4, text: 'kissi' },
  { image: Cat5, id: 5, text: 'kissi' },
]

const SWIPE_THRESHOLD = 120;
const { height } = Dimensions.get("window");

const CatCards = () => {
  const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: animation.x,
          dy: animation.y
        }
      ]),
      onPanResponderRelease: (e, gestureState) => {

      }
    })
  )

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {
          DATA.slice(0,2).reverse().map(({ image, id, text }, index, items) => {
            return (
              <Animated.View key={id} style={[styles.card]}>
                <Animated.Image source={image} style={[styles.image]} resizeMode="cover" />
                <View style={styles.lowertext}>
                  <Text>{text}</Text>
                </View>
              </Animated.View>
            )
          })
        }
      </View>
      <View style={styles.buttonBar}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    borderWidth: 2,
    borderColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: 'goldenrod',
  },
  card: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: .1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  image: {
    width: null,
    height: null,
    flex: 3,
    borderRadius: 2,
  },
  lowertext: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  }
});

export default CatCards;
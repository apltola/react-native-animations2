import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Cat1 from '../../assets/cat1.jpg';
import Cat2 from '../../assets/cat2.jpg';
import Cat3 from '../../assets/cat3.jpg';
import Cat4 from '../../assets/cat4.jpg';
import Cat5 from '../../assets/cat5.jpg';
import clamp from 'clamp';

/* const DATA = [
  { image: Cat1, id: 1, text: 'kissi' },
  { image: Cat2, id: 2, text: 'kissi' },
  { image: Cat3, id: 3, text: 'kissi' },
  { image: Cat4, id: 4, text: 'kissi' },
  { image: Cat5, id: 5, text: 'kissi' },
] */

const SWIPE_THRESHOLD = 120;
const { height } = Dimensions.get("window");

const CatCards = () => {
  const [data, setData] = useState([
    { image: Cat1, id: 1, text: 'kissi1' },
    { image: Cat2, id: 2, text: 'kissi2' },
    { image: Cat3, id: 3, text: 'kissi3' },
    { image: Cat4, id: 4, text: 'kissi4' },
    { image: Cat5, id: 5, text: 'kissi5' },
  ]);

  const animation = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const _next = useRef(new Animated.Value(.9)).current;

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
      onPanResponderRelease: (e, { dx, vx, vy }) => {
        let velocity;
        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(Math.abs(vx), 3, 5) * -1;
        }

        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          Animated.decay(animation, {
            velocity: { x: velocity, y: vy },
            deceleration: .98,
          }).start(transitionNext); // start method gets a callback...
        } else {
          Animated.spring(animation, {
            toValue: { x: 0, y: 0},
            friction: 5
          }).start();
        }
      }
    })
  ).current;

  const transitionNext = () => {
    console.log('transition next...');
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300
      }),
      Animated.spring(_next, {
        toValue: 1,
        friction: 4
      })
    ]).start(() => {
      setData(prevState => prevState.slice(1));
    });
  }

  useEffect(() => {
    console.log('data updated');
    _next.setValue(.9);
    opacity.setValue(1);
    animation.setValue({x: 0, y: 0});

    return () => {};
  }, [data]);

  const rotate = animation.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-30deg", "0deg", "30deg"],
    extrapolate: "clamp"
  });

  const imageOpacity = animation.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [.5, 1, .5],
    extrapolate: 'clamp',
  });

  const animatedCardStyles = {
    opacity: opacity,
    transform: [
      {
        rotate
      },
      ...animation.getTranslateTransform()
    ]
  }

  const animatedImageStyles = {
    opacity: imageOpacity
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {
          
          data.slice(0,2).reverse().map(({ image, id, text }, index, items) => {

            const isLastItem = index === items.length - 1;
            const isSecondToLastItem = index === items.length - 2;

            const panHandlers = isLastItem ? panResponder.panHandlers : {};
            const cardStyle = isLastItem ? animatedCardStyles : undefined;
            const imageStyle = isLastItem ? animatedImageStyles : undefined;

            const nextStyle = isSecondToLastItem ? { transform: [{ scale: _next }]} : undefined;

            return (
              <Animated.View key={id} style={[styles.card, cardStyle, nextStyle]} {...panHandlers}>
                <Animated.Image source={image} style={[styles.image, imageStyle, /* nextStyle */]} resizeMode="cover" />
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
    //borderWidth: 2,
    //borderColor: 'red',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 10,
    //borderWidth: 2,
    //borderColor: 'goldenrod',
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
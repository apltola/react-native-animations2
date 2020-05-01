import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';


const InterpolationView = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 800
      }).start();
    });
  }

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
  });

  const boxAnimatedStyle = {
    backgroundColor: boxInterpolation
  }

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.square, boxAnimatedStyle]} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  square: {
    height: 150,
    width: 150,
    marginTop: 20,
  }
})

export default InterpolationView;
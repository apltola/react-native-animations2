import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView, Easing } from 'react-native';


const MovableView = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const animatedStyles = {
    opacity: animation
  }

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  }

  return (
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View style={[styles.square, animatedStyles]} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  square: {
    height: 150,
    width: 150,
    marginTop: 20,
    backgroundColor: "tomato"
  }
})

export default MovableView;
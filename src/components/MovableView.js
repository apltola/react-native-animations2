import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';


const MovableView = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 500
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 250,
      }).start()
    });
  }

  const animatedStyles = {
    transform: [{
      translateY: animation
    }]
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
    backgroundColor: "#53d769"
  }
})

export default MovableView;
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView, Easing } from 'react-native';


const MovableView = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 500,
      easing: Easing.back(5),
    }).start(() => {
      Animated.timing(animation, {
        toValue: -110,
        duration: 300,
      }).start(() => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 200,
          easing: Easing.back(1),
        }).start()
      })
    });
  }

  const animatedStyles = {
    transform: [{
      translateX: animation
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
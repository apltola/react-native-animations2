import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';


const ScaleView = () => {
  const animation = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500
    }).start(() => {
      Animated.timing(animation, {
        toValue: -1,
        duration: 1000
      }).start(() => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 500
        }).start();
      });
    });
  }

  const animatedStyles = {
    transform: [{
      scaleX: animation,
    },{
      scaleY: animation
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
    backgroundColor: "#fd9426",
  }
})

export default ScaleView;
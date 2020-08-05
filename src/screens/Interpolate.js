import React, { useState, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { iosColors } from '../../util';

const Interpolate = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 300,
      }).start();
    });
  }

  useEffect(() => {
    return () => {
      animation.setValue(0);
    }
  }, [])

  const animatedInterpolate = animation.interpolate({
    inputRange: [0,1,2],
    outputRange: [0, 350, 0]
  });

  const animatedStyles = {
    transform: [
      { translateY: animatedInterpolate }
    ]
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 15,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: iosColors.orange,
  },
  box2: {
    marginTop: 10,
    height: 150,
    width: 150,
    backgroundColor: iosColors.darkGreen,
  },
  box3: {
    marginTop: 10,
    height: 150,
    width: 150,
    backgroundColor: iosColors.lightBlue,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  }
})

export default Interpolate;
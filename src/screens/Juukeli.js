import React, { useState, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { iosColors } from '../../util';

const Juukeli = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [])

  const animatedStyles = {
    opacity: fadeAnim,
  }

  const handleClick = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={[styles.text]}>juuuukeli</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: iosColors.orange,
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  }
})

export default Juukeli;
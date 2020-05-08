import React, { useRef, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView, PanResponder } from 'react-native';

function FunctionScreen() {
  const animation = useRef(new Animated.ValueXY(0)).current;

  const pr = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      animation.extractOffset();
    },
    onPanResponderMove: Animated.event([
      null,
      {
        dx: animation.x,
        dy: animation.y
      }
    ]),
    onPanResponderRelease: (e, {vx, vy}) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.99
      }).start()
    }
  });

  const [panResponder, setPanResponder] = useState(pr);

  const animatedStyle = {
    transform: animation.getTranslateTransform()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} {...panResponder.panHandlers} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'tomato',
  }
})

export default FunctionScreen;
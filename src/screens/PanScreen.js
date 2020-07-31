import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, StatusBar } from 'react-native';

const PanScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        })
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text>drag the box....</Text>
      <Animated.View style={{transform: [{ translateX: pan.x }, { translateY: pan.y }]}} {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
  }
});

export default PanScreen;
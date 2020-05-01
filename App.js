import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import FadeInView from './src/components/FadeInView';
import MovableView from './src/components/MovableView';
import ScaleView from './src/components/ScaleView';
import InterpolationView from './src/components/InterpolationView';

export default function App() {
  const [animation, setAnimation] = useState(new Animated.Value(1));

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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.square, animatedStyles]} />
        </TouchableWithoutFeedback>
        <MovableView />
        <FadeInView />
        <ScaleView />
        <InterpolationView />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  scroll: {
    //flex: 1,
    //borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  square: {
    height: 150,
    width: 150,
    backgroundColor: 'tomato',
  },
});

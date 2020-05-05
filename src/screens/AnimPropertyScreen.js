import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import OpacityView from '../components/OpacityView';
import MovableView from '../components/MovableView';
import FadeInView from '../components/FadeInView';
import ScaleView from '../components/ScaleView';
import InterpolationView from '../components/InterpolationView';

const AnimPropertyScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <OpacityView />
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
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
});

export default AnimPropertyScreen;
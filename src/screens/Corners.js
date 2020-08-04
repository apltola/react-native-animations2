import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

const Corners = () => {
  const animation = useRef(new Animated.ValueXY()).current;

  const startAnimation = () => {
    const {width, height} = Dimensions.get('window');
    Animated.sequence([
      Animated.spring(animation.y, {
        toValue: height - 200
      }),
      Animated.spring(animation.x, {
        toValue: width - 150
      }),
      Animated.spring(animation.y, {
        toValue: 0
      }),
      Animated.spring(animation.x, {
        toValue: 0
      })
    ]).start()
  }

  const animatedStyles = {
    transform: animation.getTranslateTransform()
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TouchableWithoutFeedback
        style={styles.touchable}
        onPress={startAnimation}
      >
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    alignContent: "stretch",
    justifyContent: 'flex-start',
  },
  touchable: {
    height: "100%"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

export default Corners;
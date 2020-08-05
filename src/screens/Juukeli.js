import React, { useState, useEffect, useRef } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, TextInput, Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { iosColors } from '../../util';

const Juukeli = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const scalexAnim = useRef(new Animated.Value(1)).current;
  const scaleyAnim = useRef(new Animated.Value(1)).current;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedClicked, setIsExpandedClicked] = useState(false);

  const widthAnim = useRef(new Animated.Value(150)).current;
  const heightAnim = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();

    return () => {
      scalexAnim.setValue(1);
      scaleyAnim.setValue(1);
      widthAnim.setValue(150);
      heightAnim.setValue(150);
    }
  }, [])

  const animatedStyles = {
    opacity: fadeAnim,
  }

  const animatedStyles2 = {
    transform: [
      { scaleX: scalexAnim },
      { scaleY: scaleyAnim },
    ]
  }

  const handleClick = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  const handleScaleClick = () => {
    setIsExpanded(!isExpanded);
    setIsExpandedClicked(true);
  }
  
  useEffect(() => {
    if (isExpandedClicked) {
      Animated.timing(scalexAnim, {
        toValue: isExpanded ? 1 : 2,
        duration: 300,
      }).start();
    }
  }, [isExpanded])

  const handleWidthClick = () => {
    Animated.stagger(400, [
      Animated.timing(widthAnim, {
        toValue: 300,
        duration: 200,
      }).start(),
      Animated.timing(heightAnim, {
        toValue: 200,
        duration: 250,
      }).start()
    ])
  }

  const animatedStyles3 = {
    width: widthAnim,
    height: heightAnim,
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text style={[styles.text]}>juuuukeli</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleScaleClick}>
        <Animated.View style={[styles.box2, animatedStyles2 ]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleWidthClick}>
        <Animated.View style={[styles.box3, animatedStyles3 ]} />
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

export default Juukeli;
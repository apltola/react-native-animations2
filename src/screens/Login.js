import React, { useState, useEffect, useRef } from 'react';
import { Image, TextInput, Animated, View, StyleSheet, PanResponder, Text, StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Background from '../../assets/catbackground.jpg';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Background}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { width: null, height: null }]}
      />
      <View style={styles.container} />
      <KeyboardAvoidingView style={styles.form} behavior="padding">
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <AnimatedTextInput
            style={[styles.input]}
            placeholder="Email"
            keyboardType="email-address"
          />
          <AnimatedTextInput
            style={[styles.input]}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity>
            <Animated.View style={[styles.button]}>
              <Text style={styles.buttonText}>Login</Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.container} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,.25)",
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#333",
    backgroundColor: "#FFF"
  },
  button: {
    marginTop: 10,
    backgroundColor: "tomato",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
  }
})

export default Login;

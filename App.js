import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimPropertyScreen from './src/screens/AnimPropertyScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="box" component={AnimPropertyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

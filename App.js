import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimPropertyScreen from './src/screens/AnimPropertyScreen';
import FunctionScreen from './src/screens/FunctionScreen';
import PanScreen from './src/screens/PanScreen';
import Corners from './src/screens/Corners';

StatusBar.setBarStyle('dark-content');

const Tab = createBottomTabNavigator();

export default function App() {

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255,255,255)',
    }
  }

  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator initialRouteName="function">
        <Tab.Screen name="box" component={AnimPropertyScreen} />
        <Tab.Screen name="function" component={FunctionScreen} />
        <Tab.Screen name="pan" component={PanScreen} />
        <Tab.Screen name="corners" component={Corners} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimPropertyScreen from './src/screens/AnimPropertyScreen';
import FunctionScreen from './src/screens/FunctionScreen';
import PanScreen from './src/screens/PanScreen';
import Corners from './src/screens/Corners';
import CatCards from './src/screens/CatCards';
import Login from './src/screens/Login';
import Juukeli from './src/screens/Juukeli';
import Interpolate from './src/screens/Interpolate';

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
      <Tab.Navigator initialRouteName="6">
        <Tab.Screen name="1" component={Interpolate} />
        <Tab.Screen name="2" component={Juukeli} />
        <Tab.Screen name="3" component={PanScreen} />
        <Tab.Screen name="5" component={CatCards} />
        <Tab.Screen name="6" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedFlatListScreen from './screens/AnimatedFlatListScreen';
import ScrollHeaderScreen from './screens/ScrollHeaderScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ScrollHeader" component={ScrollHeaderScreen} />
        <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatListScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
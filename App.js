import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import ReviewScreen from './screens/ReviewScreen';
import HistoryScreen from './screens/HistoryScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TOEIC単語アプリ' }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'クイズ' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: '結果' }} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ChallengeProvider } from './context/ChallengeContext'; // Import the ChallengeProvider
import StackNavigator from './StackNavigator'; // Import your existing StackNavigator
import { FitnessContext } from './context/Context.js';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalScreen from './screens/GoalScreen'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ChallengeProvider>  
    <FitnessContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Goal">
          {/* First screen will be GoalScreen */}
          <Stack.Screen name="Goal" component={GoalScreen} options={{ headerShown: false }} />
          {/* After GoalScreen, we navigate to BottomTabNavigator (which contains the Home tab and others) */}
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      </FitnessContext>
    </ChallengeProvider>
  );
}

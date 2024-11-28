import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import Stack Navigator

// Import screens
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import CreateChallengeScreen from './screens/CreateChallengeScreen';
import ShowChallengesScreen from './screens/ShowChallengesScreen';
import ProgressScreen from './screens/ProgressScreen';

// Create a Stack Navigator for Home tab
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    {/* Home Screen and nested screens */}
    <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Workout" component={WorkoutScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
  </Stack.Navigator>
);

const ShowChallengesStack = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="ShowChallenges" component={ShowChallengesScreen} />
    <Stack.Screen options={{ headerShown: false }} name="CreateChallenge" component={CreateChallengeScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Workout" component={WorkoutScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false, // Hide header for tab screens
      tabBarStyle: {
        backgroundColor: '#FF6F61',
        borderTopWidth: 0,
        height: 60,
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    {/* Home tab - uses HomeStack as the component */}
    <Tab.Screen
      name="Home"
      component={HomeStack} // HomeStack is used here as the component
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    {/* Other tabs */}
    <Tab.Screen
      name="Add"
      component={CreateChallengeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ShowChallenges"
      component={ShowChallengesStack} // Use ShowChallengesStack here
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="list-alt" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={ProgressScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="chart-pie" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;

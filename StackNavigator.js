import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import CreateChallengeScreen from './screens/CreateChallengeScreen';
import ShowChallengesScreen from './screens/ShowChallengesScreen';
import GoalScreen from './screens/GoalScreen';
import ProgressScreen from './screens/ProgressScreen.js';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
         <Stack.Screen options={{ headerShown: false } }name="CreateChallenge" component={CreateChallengeScreen} />
         <Stack.Screen options={{ headerShown: false } } name="ShowChallenges" component={ShowChallengesScreen} />
          <Stack.Screen options = {{headerShown: false}} name="Goal" component={GoalScreen} />
          <Stack.Screen options = {{headerShown: false}} name="Progress" component={ProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
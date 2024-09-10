import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutSession from '../screens/WorkoutSession';
import BottomTabsNavigator from './BottomTabsNavigator';
import CreateWorkoutSession from '../screens/CreateWorkoutSession';
import Exercise from '../screens/Exercise';
import CreateExercise from '../screens/CreacteExercise';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      orientation: 'portrait'
    }}>
      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Stack.Screen name="WorkoutSession" component={WorkoutSession} />
      <Stack.Screen name="CreateWorkoutSession" component={CreateWorkoutSession} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="CreateExercise" component={CreateExercise} />
    </Stack.Navigator>
  );
}

export default StackNavigator
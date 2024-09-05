import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutSession from '../screens/WorkoutSession';
import BottomTabsNavigator from './BottomTabsNavigator';
import CreateWorkoutSession from '../screens/CreateWorkoutSession';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Stack.Screen name="WorkoutSession" component={WorkoutSession} />
      <Stack.Screen name="CreateWorkoutSession" component={CreateWorkoutSession} />
    </Stack.Navigator>
  );
}

export default StackNavigator
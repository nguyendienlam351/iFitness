import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import WorkoutSessionScreen from '../screens/WorkoutSessionScreen';
import CreateWorkoutSessionScreen from '../screens/CreateWorkoutSessionScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import CreateExerciseScreen from '../screens/CreacteExerciseScreen';
import StartWorkoutScreen from '../screens/StartWorkoutScreen';

const Stack = createNativeStackNavigator();

const ScreenList = [
  {
    name: "BottomTabsNavigator",
    component: BottomTabsNavigator
  },
  {
    name: "WorkoutSessionScreen",
    component: WorkoutSessionScreen
  },
  {
    name: "CreateWorkoutSessionScreen",
    component: CreateWorkoutSessionScreen
  },
  {
    name: "ExerciseScreen",
    component: ExerciseScreen
  },
  {
    name: "CreateExerciseScreen",
    component: CreateExerciseScreen
  },
  {
    name: "StartWorkoutScreen",
    component: StartWorkoutScreen
  },
]

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='StartWorkout' 
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
      }}>
      {ScreenList?.map((item) => <Stack.Screen key={item.name} name={item.name} component={item.component} />)}
    </Stack.Navigator>
  );
}

export default StackNavigator
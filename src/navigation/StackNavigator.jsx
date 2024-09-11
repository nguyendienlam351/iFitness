import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutSession from '../screens/WorkoutSession';
import BottomTabsNavigator from './BottomTabsNavigator';
import CreateWorkoutSession from '../screens/CreateWorkoutSession';
import Exercise from '../screens/Exercise';
import CreateExercise from '../screens/CreacteExercise';
import StartWorkout from '../screens/StartWorkout';

const Stack = createNativeStackNavigator();

const ScreenList = [
  {
    name: "BottomTabsNavigator",
    component: BottomTabsNavigator
  },
  {
    name: "WorkoutSession",
    component: WorkoutSession
  },
  {
    name: "CreateWorkoutSession",
    component: CreateWorkoutSession
  },
  {
    name: "Exercise",
    component: Exercise
  },
  {
    name: "CreateExercise",
    component: CreateExercise
  },
  {
    name: "StartWorkout",
    component: StartWorkout
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
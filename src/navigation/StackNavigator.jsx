import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutSession from '../screens/WorkoutSession';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
      initialRouteName='WorkoutSession'>
      <Stack.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
      <Stack.Screen name="WorkoutSession" component={WorkoutSession} />
    </Stack.Navigator>
  );
}

export default StackNavigator
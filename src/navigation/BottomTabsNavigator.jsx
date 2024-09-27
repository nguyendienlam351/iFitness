import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/colors';
import { StyleSheet } from 'react-native';
import { vs, ms } from 'react-native-size-matters';
import { iconSize } from '../constants/dimensions';
import SearchWorkoutSessionScreen from '../screens/SearchWorkoutSessionScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.secondary,
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBarStyle,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={ms(iconSize.md)} />
                    ),
                }} />
            <Tab.Screen
                name="SearchWorkoutSessionScreen"
                component={SearchWorkoutSessionScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-list" color={color} size={ms(iconSize.md)} />
                    ),
                }} />
            <Tab.Screen
                name="Setting"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={ms(iconSize.md)} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: colors.backgroundSecondary,
        height: vs(60),
        borderTopWidth: 0
    }
})
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    await BootSplash.hide({ fade: true });
  }
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
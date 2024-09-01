import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash"

const App = () => {
  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    await BootSplash.hide({ fade: true });
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
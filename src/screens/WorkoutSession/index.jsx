import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WorkoutSession = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>WorkoutSession</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WorkoutSession

const styles = StyleSheet.create({})
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const WorkoutSessionItem = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.line} />
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={1}>Buổi đẩy</Text>
                <Text style={styles.description} numberOfLines={2}>Các bài tập thân trên cho ngực, vai và tay sau</Text>
            </View>
            <View style={styles.sessions}>
                <Text numberOfLines={1} style={styles.sessionsNum}>100</Text>
                <Text numberOfLines={1} style={styles.sessionsText}>sessions</Text>
            </View>
        </TouchableOpacity>
    )
}

export default WorkoutSessionItem
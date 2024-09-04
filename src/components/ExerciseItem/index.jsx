import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { ms } from 'react-native-size-matters'

const ExerciseItem = () => {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.line} />
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={2}>Diamond Pushup sdfsdf sdfs df sfs sdf  sfsfsdfsd</Text>
                <Text style={styles.sets} numberOfLines={1}>Sets: 5</Text>
            </View>
            <View style={styles.durationContainer}>
                <View style={styles.duration}>
                    <MaterialCommunityIcons name="motion-pause-outline" size={ms(iconSize.sm)} color={colors.textSecondary} />
                    <Text style={styles.durationText}>2m30s</Text>
                </View >
                <View style={styles.duration}>
                    <MaterialCommunityIcons name="motion-play-outline" size={ms(iconSize.sm)} color={colors.textSecondary} />
                    <Text style={styles.durationText}>none</Text>
                </View >
            </View>
        </TouchableOpacity>
    )
}

export default ExerciseItem
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { ms } from 'react-native-size-matters'

const DurationButton = ({ onPressDuration = null, title, value, iconName, disabled = false }) => {
    return (
        <TouchableOpacity style={styles.durationButton} disabled={disabled} onPress={onPressDuration}>
            <View style={styles.durationIcon}>
                <MaterialCommunityIcons name={iconName} size={ms(iconSize.md)} color={colors.button} />
            </View>
            <View style={styles.durationTextContainer}>
                <Text style={styles.durationTitle} numberOfLines={1}>{title}</Text>
                <Text style={styles.durationValue}>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DurationButton
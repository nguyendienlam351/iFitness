import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ms } from 'react-native-size-matters'
import { colors } from '../../constants/colors'
import { iconSize } from '../../constants/dimensions'

const SetItem = () => {
    const isKg = true

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.line} />
            <View style={styles.contentContainer}>
                <View style={styles.repContainer}>
                    <Text style={styles.repsValue}>40/20</Text>
                    <Text style={styles.repsText}>Reps</Text>
                </View>
                <View style={styles.weightContainer}>
                    <Text>Weight:</Text>
                    <View>
                        <Text>40</Text>
                        <MaterialCommunityIcons name={isKg ? "weight-kilogram" : "weight-pound"} size={ms(iconSize.md)} color={colors.button} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SetItem
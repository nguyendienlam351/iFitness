import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ms } from 'react-native-size-matters'
import { colors } from '../../constants/colors'
import { iconSize } from '../../constants/dimensions'

const kg_icon = "weight-kilogram";
const lb_icon = "weight-pound";

const SetItem = () => {
    const isKg = true

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.line} />
            <View style={styles.contentContainer}>
                <View style={styles.repContainer}>
                    <Text style={styles.repsText}>Repetition</Text>
                    <Text style={styles.repsValue}>40/20</Text>
                </View>
                <View style={styles.line2} />
                <View style={styles.weightContainer}>
                    <View style={styles.weightValueContainer}>
                        <Text style={styles.weighValue}>40</Text>
                        <MaterialCommunityIcons name={isKg ? kg_icon : lb_icon} size={ms(iconSize.md)} color={colors.textPrimary} />
                    </View>
                    <Text style={styles.weighText}>weight</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SetItem
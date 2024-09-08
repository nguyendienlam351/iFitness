import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '../../constants/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { ms } from 'react-native-size-matters'

const SearchHeader = ({ value, onChangeText, rightComponent }) => {

    const onClear = () => {
        onChangeText("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <MaterialCommunityIcons name="magnify" size={ms(iconSize.md)} color={colors.textPrimary} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={colors.textSecondary}
                    style={styles.searchInput}
                    value={value}
                    onChangeText={onChangeText}
                />
                {
                    value != "" &&
                    <TouchableOpacity onPress={onClear}>
                        <MaterialCommunityIcons name="close-circle-outline" size={ms(iconSize.sm)} color={colors.textSecondary} />
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.rightContainer}>
                {rightComponent}
            </View>
        </View>
    )
}

export default SearchHeader
import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Header = ({ headerTitle, leftComponent, rightComponent }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {leftComponent}
            </View>
            <View style={styles.centerContainer}>
                {headerTitle && <Text style={styles.headerTitle} numberOfLines={1}>{headerTitle}</Text>}
            </View>
            <View style={styles.rightContainer}>
                {rightComponent}
            </View>
        </View>
    )
}

export default Header
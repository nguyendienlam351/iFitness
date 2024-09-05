import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { ms } from 'react-native-size-matters'
import { colors } from '../../constants/colors'
import DurationModal from '../../components/DurationModal'

const Exercise = () => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header
                leftComponent={
                    <TouchableOpacity onPress={null} >
                        <MaterialCommunityIcons name="arrow-left" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity onPress={null}>
                        <MaterialCommunityIcons name="dots-vertical" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                headerTitle={"Exercise"} />
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={2}>Lorem Ipsum is simply dummy </Text>

                {/* duration */}
                <View style={styles.durationContainer}>
                    <View style={styles.duration}>
                        <Text style={styles.durationTitle}>Rest Duration</Text>
                        <TouchableOpacity style={styles.durationButton}>
                            <View style={styles.durationIcon}>
                                <MaterialCommunityIcons name="motion-pause-outline" size={ms(iconSize.md)} color={colors.button} />
                            </View>
                            <View style={styles.durationTextContainer}>
                                <Text style={styles.durationValue}>3m30s</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.duration}>
                        <Text style={styles.durationTitle}>Exercise Duration</Text>
                        <TouchableOpacity style={styles.durationButton}>
                            <View style={styles.durationIcon}>
                                <MaterialCommunityIcons name="motion-play-outline" size={ms(iconSize.md)} color={colors.button} />
                            </View>
                            <View style={styles.durationTextContainer}>
                                <Text style={styles.durationValue}>3m30s</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.headerListContainer}>
                    <Text style={styles.headerListTitle}>Sets</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="plus" size={ms(iconSize.md)} color={colors.button} />
                    </TouchableOpacity>
                </View>
            </View>
            <DurationModal />
        </View>
    )
}

export default Exercise
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SetItem from '../../components/SetItem'
import Header from '../../components/Header'
import DurationButton from '../../components/DurationButton'

const StartWorkoutScreen = () => {
    return (
        <View style={styles.container}>
            {/* header */}

            <Header
                rightComponent={
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="power" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                headerTitle={"Push day"} />

            {/* content */}
            <View style={styles.contentContainer}>
                <View style={styles.totalDurationContainer}>
                    <DurationButton
                        disabled
                        title={"Total Rest"}
                        value={"3m30s"}
                        iconName={"motion-pause-outline"} />

                    <DurationButton
                        disabled
                        title={"Total Exercise"}
                        value={"3m30s"}
                        iconName={"motion-play-outline"} />
                </View>
                {/* session list */}
                <ScrollView
                    style={styles.sessionList}
                    horizontal
                    pagingEnabled>
                    {[1, 2, 3, 4, 5].map((item) =>
                        <View key={item} style={styles.contentSession}>
                            <View style={styles.headerListContainer}>
                                <Text style={styles.headerListTitle}>1. Diamond Pushup</Text>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="plus" size={ms(iconSize.md)} color={colors.button} />
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                style={styles.repList}
                                data={[1, 2, 3, 4, 5]}
                                renderItem={() => <SetItem />}
                            />
                            <View style={styles.footerListContainer}>
                                {/* duration of exercise */}
                                <View style={styles.durationContainer}>
                                    <View style={styles.duration}>
                                        <MaterialCommunityIcons name="motion-pause-outline" size={ms(iconSize.sm)} color={colors.primary} />
                                        <Text style={styles.durationText}>2m30s</Text>
                                    </View >
                                    <View style={styles.duration}>
                                        <MaterialCommunityIcons name="motion-play-outline" size={ms(iconSize.sm)} color={colors.primary} />
                                        <Text style={styles.durationText}>none</Text>
                                    </View >
                                </View>

                                {/* completed */}
                                <View style={styles.completedExercise}>
                                    <Text style={styles.completedExerciseText}>Completed: 4/5</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <View style={styles.dotsContainer}>
                    <View style={styles.dots} />
                </View>
            </View>
        </View>
    )
}

export default StartWorkoutScreen
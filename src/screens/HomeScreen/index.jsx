import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/Header'
import WorkoutSessionItem from '../../components/WorkoutSessionItem'

const appIconUrl = "../../../assets/appIcon/appIcon.png"

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header
                headerTitle={"iFitness"}
                leftComponent={
                    <Image source={require(appIconUrl)} style={styles.appIcon} />
                } />
            <View style={styles.contentContainer}>
                {/* workout session list */}
                <View style={styles.headerListContainer}>
                    <Text style={styles.headerListTitle}>Workout Sessions</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerListLink}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 8, 9, 10]}
                    renderItem={() => <WorkoutSessionItem onPress={() => navigation.navigate("WorkoutSession")} />}
                />
            </View>
        </View>
    )
}

export default HomeScreen

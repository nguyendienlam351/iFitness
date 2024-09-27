import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { colors } from '../../constants/colors'
import { iconSize } from '../../constants/dimensions'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchHeader from '../../components/SearchHeader'
import WorkoutSessionItem from '../../components/WorkoutSessionItem'
import SortWorkoutSessionModal from '../../components/SortWorkoutSessionModal'

const SearchWorkoutSessionScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState("");
    const [sortModal, setSortModal] = useState(false);
    const [sortValue, setSortValue] = useState(1);

    const handleSort = (value) => {
        setSortValue(value)
    }

    const onPressSort = () => {
        setSortModal(true)
    }

    return (
        <View style={styles.container}>
            {/* header */}
            <SearchHeader
                value={searchValue}
                onChangeText={setSearchValue}
                rightComponent={
                    <TouchableOpacity onPress={onPressSort}>
                        <MaterialCommunityIcons name="sort" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                } />

            {/* content */}
            <View style={styles.contentContainer}>

                <View style={styles.headerListContainer}>
                    <Text style={styles.headerListTitle}>Exercises</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="plus" size={ms(iconSize.md)} color={colors.button} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 8, 9, 10]}
                    renderItem={() => <WorkoutSessionItem onPress={() => navigation.navigate("WorkoutSession")} />}
                />
            </View>

            {/* modal */}
            <SortWorkoutSessionModal
                modalVisible={sortModal}
                setModalVisible={setSortModal}
                value={sortValue}
                onPress={handleSort} />

        </View>
    )
}

export default SearchWorkoutSessionScreen
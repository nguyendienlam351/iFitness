import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import ExerciseItem from '../../components/ExerciseItem'
import { ms } from 'react-native-size-matters'
import EditDeleteModal from '../../components/EditDeteteModal'
import YesNoModal from '../../components/YesNoModal'

const WorkoutSession = ({ navigation }) => {
    const [editDeleteModal, setEditDeleteModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(true);

    const goBack = () => {
        navigation.goBack()
    }

    const toggleEditDeleteModal = () => {
        setEditDeleteModal(!editDeleteModal)
    }

    return (
        <View style={styles.container}>
            <EditDeleteModal modalVisible={editDeleteModal} setModalVisible={setEditDeleteModal} />
            <YesNoModal
                modalVisible={deleteModal}
                setModalVisible={setDeleteModal}
                title={"Do you want to detele?"}
                noTitle={"Cancel"}
                yesTitle={"Delete"}
                onPressNo={() => setDeleteModal(!deleteModal)} />
            <Header
                leftComponent={
                    <TouchableOpacity onPress={goBack} >
                        <MaterialCommunityIcons name="arrow-left" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity onPress={toggleEditDeleteModal}>
                        <MaterialCommunityIcons name="dots-vertical" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                headerTitle={"Workout Session"} />

            <View style={styles.contentContainer}>
                {/* title and description */}
                <Text style={styles.title} numberOfLines={2}>Lorem Ipsum is simply dummy </Text>
                <Text style={styles.description} numberOfLines={6}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Text>

                {/* exercises list  */}
                <View style={styles.headerListContainer}>
                    <Text style={styles.headerListTitle}>Exercises</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="plus" size={ms(iconSize.md)} color={colors.button} />
                    </TouchableOpacity>
                </View>

                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />
                <ExerciseItem />

                {/* start button */}

                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonTitle}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WorkoutSession
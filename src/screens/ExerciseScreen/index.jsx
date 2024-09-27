import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { ms } from 'react-native-size-matters'
import { colors } from '../../constants/colors'
import DurationModal from '../../components/DurationModal'
import SetItem from '../../components/SetItem'
import EditDeleteModal from '../../components/EditDeteteModal'
import DurationButton from '../../components/DurationButton'

const ExerciseScreen = ({ navigation }) => {
    const [durationModal, setDurationModal] = useState(false);
    const [editDeleteModal, setEditDeleteModal] = useState(false);

    const onPressDuration = () => {
        setDurationModal(true);
    }

    const toggleEditDeleteModal = () => {
        setEditDeleteModal(!editDeleteModal);
    }

    const goBack = () => {
        navigation.goBack();
    }

    const onPressEdit = () => {
        setEditDeleteModal(false)
        navigation.navigate("CreateExercise")
    }

    return (
        <View style={styles.container}>
            {/* header */}
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
                headerTitle={"Exercise"} />
            <View style={styles.contentContainer}>
                <Text style={styles.title} numberOfLines={2}>Lorem Ipsum is simply dummy </Text>

                {/* duration */}
                <View style={styles.durationContainer}>
                    <DurationButton
                        onPressDuration={onPressDuration}
                        title={"Rest Duration"}
                        value={"3m30s"}
                        iconName={"motion-pause-outline"} />

                    <DurationButton
                        onPressDuration={onPressDuration}
                        title={"Exercise Duration"}
                        value={"3m30s"}
                        iconName={"motion-play-outline"} />
                </View>

                {/* set list */}
                <View style={styles.headerListContainer}>
                    <Text style={styles.headerListTitle}>Sets</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="plus" size={ms(iconSize.md)} color={colors.button} />
                    </TouchableOpacity>
                </View>
                <SetItem />
                <SetItem />
                <SetItem />
                <SetItem />
            </View>

            {/* duration */}
            <DurationModal modalVisible={durationModal} setModalVisible={setDurationModal} />
            <EditDeleteModal
                modalVisible={editDeleteModal}
                setModalVisible={setEditDeleteModal}
                onPressEdit={onPressEdit}
                onPressDelete={null} />
        </View>
    )
}

export default ExerciseScreen
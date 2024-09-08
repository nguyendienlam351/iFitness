import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'
import { ms } from 'react-native-size-matters'


const choose = "circle-slice-8"
const not_choose = "circle-outline"

const sort_type = [
    {
        id: 1,
        name: "Newest date first",
        icon: "sort-clock-ascending-outline"
    },
    {
        id: 2,
        name: "Oldest date first",
        icon: "sort-clock-descending-outline"
    },
    {
        id: 3,
        name: "Name A -> Z",
        icon: "sort-alphabetical-ascending"
    },
    {
        id: 4,
        name: "Name Z -> A",
        icon: "sort-alphabetical-descending"
    }
]

const SortWorkoutSessionModal = ({ modalVisible, setModalVisible, value, onPress }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle} numberOfLines={1}>Sort by</Text>

                    {/* sort list */}
                    <View style={styles.contentContainer}>
                        {sort_type.map((item) => {
                            const isChoose = value == item.id;
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.itemContainer}
                                    onPress={() => onPress(item.id)}>

                                    <MaterialCommunityIcons
                                        name={isChoose ? choose : not_choose}
                                        size={ms(iconSize.md)}
                                        color={colors.textPrimary} />

                                    <View style={styles.itemTitleContainer}>
                                        <MaterialCommunityIcons
                                            name={item.icon}
                                            size={ms(iconSize.sm)}
                                            color={isChoose ? colors.textPrimary : colors.textSecondary} />
                                        <Text
                                            style={[styles.itemTitle, isChoose && { color: colors.textPrimary }]}
                                            numberOfLines={1}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                    {/* button */}
                    <TouchableOpacity style={styles.cancelContainer} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.cancelText} numberOfLines={1}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SortWorkoutSessionModal

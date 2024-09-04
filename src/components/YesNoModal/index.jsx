import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const YesNoModal = ({ modalVisible, setModalVisible, title, yesTitle, noTitle, onPressYes, onPressNo }) => {
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
                    <Text style={styles.modalTitle} numberOfLines={1}>{title}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.noContainer} onPress={onPressNo}>
                            <Text style={styles.noText} numberOfLines={1}>{yesTitle}</Text>
                        </TouchableOpacity>
                        <View style={styles.spacing} />
                        <TouchableOpacity style={styles.yesContainer}>
                            <Text style={styles.yesText} numberOfLines={1}>{noTitle}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default YesNoModal

import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const EditDeleteModal = ({ modalVisible, setModalVisible, onPressEdit, onPressDelete }) => {
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
                    <Text style={styles.modalTitle}>Do you want to?</Text>

                    <TouchableOpacity style={styles.editContainer} onPress={onPressEdit}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>

                    <View style={styles.orContainer}>
                        <View style={styles.orLine} />
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.orLine} />
                    </View>

                    <TouchableOpacity style={styles.deleteContainer} onPress={onPressDelete}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default EditDeleteModal
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const EditDeleteModal = ({ modalVisible, setModalVisible }) => {
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

                    <TouchableOpacity style={styles.editContainer}>
                        <Text style={styles.editText}>Edit</Text>
                    </TouchableOpacity>

                    <View style={styles.orContainer}>
                        <View style={styles.orLine} />
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.orLine} />
                    </View>

                    <TouchableOpacity style={styles.deleteContainer}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default EditDeleteModal
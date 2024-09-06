import { Modal, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const DurationModal = ({ modalVisible, setModalVisible, }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Rest Duration</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.valueInput}
                                value={"30"} />
                            <Text style={styles.valueText}>minutes</Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.valueInput}
                                value={"30"} />
                            <Text style={styles.valueText}>seconds</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelContainer} >
                            <Text style={styles.cancelText} numberOfLines={1}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.saveContainer}>
                            <Text style={styles.saveText} numberOfLines={1}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DurationModal

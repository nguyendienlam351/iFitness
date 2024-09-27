import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ms } from 'react-native-size-matters'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const CreateWorkoutSessionScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState("");

    const onBack = () => {
        navigation.goBack()
    }

    const onChangeText = (text) => {
        setDescription(text);
    }

    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={onBack}>
                        <MaterialCommunityIcons name="arrow-left" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                headerTitle={"Workout Session"} />
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>Session</Text>
                        <TextInput
                            style={styles.nameTextInput}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>Description</Text>
                        <TextInput
                            style={styles.descriptionTextInput}
                            multiline={true}
                            numberOfLines={8}
                            onChangeText={onChangeText}
                            value={description} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CreateWorkoutSessionScreen
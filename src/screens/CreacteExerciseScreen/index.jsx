import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ms } from 'react-native-size-matters'
import { iconSize } from '../../constants/dimensions'
import { colors } from '../../constants/colors'

const CreateExerciseScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(null);

    const onBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <TouchableOpacity onPress={onBack}>
                        <MaterialCommunityIcons name="arrow-left" size={ms(iconSize.md)} color={colors.textPrimary} />
                    </TouchableOpacity>
                }
                headerTitle={"Exercise"} />
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>Exercise</Text>
                        <TextInput
                            style={styles.nameTextInput}
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                </View>
                {
                    !keyboardStatus &&
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

export default CreateExerciseScreen
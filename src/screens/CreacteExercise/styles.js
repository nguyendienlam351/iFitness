import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
import { fontFamilies } from "../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.md)
    },
    content: {
        flex: 1
    },
    nameContainer: {
        marginBottom: vs(spacing.lg)
    },
    title: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
        marginBottom: vs(spacing.xm)
    },
    nameTextInput: {
        backgroundColor: colors.inputBackground,
        color: colors.input,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.sm)
    },
    buttonContainer: {
        flexDirection: "row",
        gap: s(spacing.sm)
    },
    cancelButton: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        padding: vs(spacing.sm),
        borderWidth: ms(2),
        borderColor: colors.input
    },
    cancelText: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
    saveButton: {
        flex: 1,
        backgroundColor: colors.buttonBackground,
        alignItems: "center",
        padding: vs(spacing.sm),
    },
    saveText: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
})
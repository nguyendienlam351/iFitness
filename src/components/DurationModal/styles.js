import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { fontSize, iconSize, spacing } from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: s(spacing.xl)
    },
    modalContainer: {
        backgroundColor: colors.background,
        width: "100%",
        padding: vs(spacing.md),
    },
    inputContainer: {
        flexDirection: "row",
        gap: s(spacing.sm),
    },
    input: {
        flex: 1,
    },
    valueInput: {
        backgroundColor: colors.inputBackground,
        color: colors.input,
        fontFamily: fontFamilies.bold,
        fontSize: ms(fontSize.xl * 2),
        textAlign: "center",
        // paddingHorizontal: s(spacing.md),
        // paddingVertical: vs(spacing.sm)
    },
    valueText: {

    },
    buttonContainer: {
        flexDirection: "row",
        gap: s(spacing.sm)
    },
    cancelContainer: {
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
    saveContainer: {
        flex: 1,
        backgroundColor: colors.buttonBackground,
        alignItems: "center",
        padding: vs(spacing.sm),
    },
    saveText: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    }
})
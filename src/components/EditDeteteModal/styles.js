import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
import { fontFamilies } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: s(spacing.xl)
    },
    modalView: {
        backgroundColor: colors.background,
        width: "100%",
        padding: vs(spacing.md),
    },
    modalTitle: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.lg),
        alignSelf: "center",
        marginBottom: vs(spacing.md)
    },
    editContainer: {
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        padding: vs(spacing.sm),
        borderWidth: ms(2),
        borderColor: colors.buttonBackground
    },
    editText: {
        color: colors.buttonBackground,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
    deleteContainer: {
        backgroundColor: colors.buttonBackground,
        alignItems: "center",
        padding: vs(spacing.sm),
    },
    deleteText: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
    orContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    orLine: {
        height: vs(1),
        flex: 1,
        backgroundColor: colors.secondary
    },
    orText: {
        color: colors.secondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
        paddingHorizontal: s(spacing.md),
        marginVertical: vs(spacing.xm)
    },
})
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";
import { fontSize, spacing } from "../../constants/dimensions";

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
        fontSize: ms(fontSize.md),
        alignSelf: "center",
        marginBottom: vs(spacing.md)
    },
    buttonContainer: {
        flexDirection: "row"
    },
    noContainer: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
        alignItems: "center",
        padding: vs(spacing.sm),
        borderWidth: ms(2),
        borderColor: colors.input
    },
    noText: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
    yesContainer: {
        flex: 1,
        backgroundColor: colors.buttonBackground,
        alignItems: "center",
        padding: vs(spacing.sm),
    },
    yesText: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
    spacing: {
        width: s(spacing.sm)
    }
})
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,

    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md)
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.lg),
        marginBottom: vs(spacing.sm)
    },
    description: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
        textAlign: "justify",
        marginBottom: vs(spacing.sm)
    },
    headerListContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: colors.buttonBackground,
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.sm),
        marginBottom: vs(spacing.md)
    },
    headerListTitle: {
        color: colors.button,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.lg),
    },
    startButton: {
        backgroundColor: colors.buttonBackground,
        alignItems: "center",
        padding: vs(spacing.sm),
        position: "absolute",
        bottom: s(spacing.md),
        left: s(spacing.md),
        right: s(spacing.md),
    },
    startButtonTitle: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    }
})
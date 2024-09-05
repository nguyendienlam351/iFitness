import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { ms, vs } from "react-native-size-matters";
import { s } from "react-native-size-matters";
import { fontSize, spacing } from "../../constants/dimensions";
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
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.lg),
        marginBottom: vs(spacing.sm)
    },
    durationContainer: {
        flexDirection: "row",
        gap: s(spacing.md),
        marginBottom: vs(spacing.sm)
    },
    duration: {
        flex: 1,
    },
    durationTitle: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
        marginBottom: vs(spacing.xm)
    },
    durationButton: {
        backgroundColor: colors.secondary,
        flexDirection: "row",
    },
    durationIcon: {
        padding: ms(spacing.sm),
        backgroundColor: colors.buttonBackground
    },
    durationTextContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    durationValue: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.lg),
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
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
})
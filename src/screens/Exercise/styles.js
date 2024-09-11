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
        marginBottom: vs(spacing.md)
    },
    durationContainer: {
        flexDirection: "row",
        gap: s(spacing.md),
        marginBottom: vs(spacing.md)
    },

    headerListContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: colors.buttonBackground,
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.sm),
        marginBottom: vs(spacing.sm)
    },
    headerListTitle: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg),
    },
})
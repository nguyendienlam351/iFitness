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
        fontSize: ms(fontSize.lg),
        alignSelf: "center",
        marginBottom: vs(spacing.md)
    },
    contentContainer: {
        marginBottom: vs(spacing.sm),
        paddingHorizontal: s(spacing.md)
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: vs(spacing.sm),
        gap: s(spacing.md)
    },
    itemTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(spacing.sm)
    },
    itemTitle: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
    },
    cancelContainer: {
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
})
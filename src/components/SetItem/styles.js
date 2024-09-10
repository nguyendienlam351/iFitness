import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
import { fontFamilies } from "../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: vs(55),
        flexDirection: "row",
        marginBottom: vs(spacing.sm),
    },
    line: {
        backgroundColor: colors.primary,
        width: s(spacing.sm)
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md),
        flexDirection: "row",
        alignItems: "center",
        gap: s(spacing.lg)
    },
    repContainer: {
        flex: 1,
        justifyContent: "center",
    },
    repsValue: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.xl),
    },
    repsText: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.md),
    },
    line2: {
        backgroundColor: colors.backgroundSecondary,
        width: s(spacing.xm),
        height: "70%"
    },
    weightContainer: {
        flex: 1,
        justifyContent: "center",
    },
    weightValueContainer: {
        flexDirection: "row",
        gap: s(spacing.xm),
        alignItems: "center"
    },
    weighValue: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.xl),
    },
    weighText: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
    }
})
import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";
import { fontSize, spacing } from "../../constants/dimensions";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: vs(60),
        flexDirection: "row",
        paddingRight: s(spacing.md),
        marginBottom: vs(spacing.sm)
    },
    line: {
        backgroundColor: colors.primary,
        width: s(spacing.sm)
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md),
        paddingVertical: s(spacing.xm)
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.md),
        height: "55%",
    },
    sets: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm),
        height: "45%"
    },
    durationContainer: {
        justifyContent: "center"
    },
    duration: {
        flexDirection: "row",

    },
    durationText: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm),
        marginLeft: s(spacing.xm)
    }
})
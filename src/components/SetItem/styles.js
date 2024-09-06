import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
import { fontFamilies } from "../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: vs(50),
        flexDirection: "row",
        marginBottom: vs(spacing.md)
    },
    line: {
        backgroundColor: colors.primary,
        width: s(spacing.sm)
    },
    contentContainer: {
        paddingHorizontal: s(spacing.md),
        flexDirection: "row",
        alignItems: "center"
    },
    repContainer: {
        // backgroundColor: "blue",
        width: "45%",
        flexDirection: "row",
        alignItems: "center"
    },
    repsValue: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.xl * 2),
    },
    repsText: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm),
        padding: s(spacing.xm),
        borderWidth: 2,
        borderColor: colors.textSecondary,
        textAlign: "center",
        borderRadius: 10
    },
    weightContainer: {
        // backgroundColor: "yellow",
        width: "55%",
        flexDirection: "row",
        alignItems: "center"
    }
})
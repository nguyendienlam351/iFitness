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
        width: "45%",
        flexDirection: "row",
    },
    repsValue: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.xl * 2),
    },
    repsText: {
        color: colors.input,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.xl * 2),
    },
    weightContainer: {
        // backgroundColor: "yellow",
        width: "55%",
        flexDirection: "row",
        alignItems: "center"
    }
})
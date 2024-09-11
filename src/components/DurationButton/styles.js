import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s } from "react-native-size-matters";


export const styles = StyleSheet.create({
    durationButton: {
        flex: 1,
        flexDirection: "row",
    },
    durationTitle: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm),
    },
    durationIcon: {
        padding: ms(spacing.sm),
        backgroundColor: colors.buttonBackground
    },
    durationTextContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: s(spacing.sm)
    },
    durationValue: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.lg),
    },
})
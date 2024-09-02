import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { fontFamilies } from "../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        height: vs(72),
        flexDirection: "row",
        paddingRight: s(spacing.md),
        marginBottom: vs(spacing.md)
    },
    line: {
        backgroundColor: colors.primary,
        width: s(spacing.md)
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md),
        paddingVertical: s(spacing.xm)
    },
    title: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.lg),
        height: "45%",
    },
    description: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm),
        height: "55%"
    },
    sessions: {
        height: ms(68),
        width: ms(68),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ms(34),
        borderWidth: ms(3),
        borderColor: colors.primary,
        alignSelf: "center",
    },
    sessionsNum: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.medium,
        fontSize: ms(fontSize.md)
    },
    sessionsText: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm)
    }
})
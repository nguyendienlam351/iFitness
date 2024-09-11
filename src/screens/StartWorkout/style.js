import { Dimensions, StyleSheet } from "react-native";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentContainer: {
        flex: 1,
        paddingVertical: vs(spacing.md)
    },
    totalDurationContainer: {
        flexDirection: "row",
        gap: s(spacing.md),
        marginBottom: vs(spacing.md),
        marginHorizontal: s(spacing.md),
    },
    sessionList: {
    },
    contentSession: {
        marginHorizontal: s(spacing.md),
    },
    headerListContainer: {
        width: windowWidth - s(spacing.md) * 2,
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
    repList: {
    },
    footerListContainer: {
        backgroundColor: colors.backgroundSecondary,
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.sm),
        flexDirection: "row",

    },
    durationContainer: {
        flex: 1,
        justifyContent: "center"
    },
    duration: {
        flexDirection: "row",
        alignItems: "center"
    },
    durationText: {
        color: colors.textSecondary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
        marginLeft: s(spacing.xm)
    },
    completedExercise: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    completedExerciseText: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.md),
    }
})
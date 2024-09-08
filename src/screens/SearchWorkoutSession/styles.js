import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { fontSize, spacing } from "../../constants/dimensions";
import { ms, s, vs } from "react-native-size-matters";
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
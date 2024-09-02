import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { ms, s } from "react-native-size-matters";
import { fontSize, spacing } from "../../constants/dimensions";
import { fontFamilies } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: s(spacing.lg)
    },
    appIcon: {
        height: ms(36),
        width: ms(36),
        resizeMode: "cover"
    },
    headerListContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    headerListTitle: {
        color: colors.textPrimary,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.xl)
    },
    headerListLink: {
        color: colors.primary,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm)
    }
})
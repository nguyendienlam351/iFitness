import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { fontSize, iconSize, spacing } from "../../constants/dimensions";
import { colors } from "../../constants/colors";
import { fontFamilies } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        height: vs(56),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: s(spacing.md),
        gap: s(spacing.md)
    },
    centerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.inputBackground,
        gap: s(spacing.xm),
        paddingHorizontal: s(spacing.sm)
    },
    searchInput: {
        flex: 1,
        color: colors.input,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.md),
    },
    rightContainer: {
        width: s(iconSize.md),
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        fontSize: ms(fontSize.xl),
        color: colors.textPrimary,
        fontFamily: fontFamilies.semiBold
    }
})
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
        paddingHorizontal: s(spacing.lg)
    },
    centerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: s(spacing.md)
    },
    leftContainer: {
        width: s(iconSize.md),
        alignItems: "center",
        justifyContent: "center"
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
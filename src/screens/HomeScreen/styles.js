import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { ms, s, vs } from "react-native-size-matters";
import { fontSize, iconSize, spacing } from "../../constants/dimensions";
import { fontFamilies } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    appIcon: {
        height: ms(iconSize.lg),
        width: ms(iconSize.lg),
        resizeMode: "cover"
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: s(spacing.md)
    },
    headerListContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: colors.buttonBackground,
        paddingHorizontal: s(spacing.md),
        paddingVertical: vs(spacing.sm),
        marginBottom: vs(spacing.md)
    },
    headerListTitle: {
        color: colors.button,
        fontFamily: fontFamilies.semiBold,
        fontSize: ms(fontSize.lg)
    },
    headerListLink: {
        color: colors.button,
        fontFamily: fontFamilies.regular,
        fontSize: ms(fontSize.sm)
    }
})
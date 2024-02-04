import { Image, View, StyleSheet, Platform } from "react-native"
import StyledText from "./StyleText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"

const RepositoryItemHeader = (props) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image
                    style={styles.image}
                    source={{ uri: props.ownerAvatarUrl }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <StyledText
                    fontWeight='bold'>{props.fullName}
                </StyledText>
                <StyledText
                    color='secondary'>{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
    )
}

function RepositoryItem(props) {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 4,
        marginBottom: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem
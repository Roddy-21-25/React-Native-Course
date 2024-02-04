import { Text, FlatList } from "react-native";
import repositories from "../../data/repository";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} key={repo.id} />
            )} />
    )
}

export default RepositoryList
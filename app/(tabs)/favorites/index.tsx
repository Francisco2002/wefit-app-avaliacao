import CardComponent from "@/components/Card";
import { FlatList } from "react-native";
import { EmptyContent, EmptyIcon, EmptyText } from "../styles";
import { useRepositories } from "@/contexts/RepositoriesProvider";

export default function FavoritesScreen() {
    const { favoritesRepositories } = useRepositories();

    return (
        <FlatList
            data={favoritesRepositories}
            contentContainerStyle={{
                padding: 16,
                gap: 16,
                flexGrow: 1
            }}
            renderItem={({ item }) => <CardComponent repository={item} />}
            ListEmptyComponent={() => (
                <EmptyContent>
                    <EmptyIcon source={require("@/assets/images/caixa-vazia.png")} />
                    <EmptyText>Nenhum repositório por aqui...</EmptyText>
                </EmptyContent>
            )}
        />
    );
}
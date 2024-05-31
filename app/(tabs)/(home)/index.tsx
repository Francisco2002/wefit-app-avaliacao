import { Alert, Animated, FlatList } from "react-native";
import CardComponent from "@/components/Card";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRepositories } from "@/contexts/RepositoriesProvider";
import { EmptyContent, EmptyIcon, EmptyText } from "../styles";
import ListSkeleton from "@/components/Skeleton/List";
import { Repository } from "@/@types/env";

export default function HomeScreen() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [repositoriesFiltered, setRepositoriesFiltered] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    const { currentUser, favoritesRepositories } = useRepositories();

    const [left] = useState(new Animated.Value(-200));
    const [right] = useState(new Animated.Value(200));
    const [opacity] = useState(new Animated.Value(0));

    function startAnimation() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    left,
                    {
                        toValue: -200,
                        duration: 1,
                        useNativeDriver: false,
                    }
                ),
                Animated.timing(
                    right,
                    {
                        toValue: 200,
                        duration: 1,
                        useNativeDriver: false
                    }
                ),
                Animated.timing(
                    opacity,
                    {
                        toValue: 0,
                        duration: 1,
                        useNativeDriver: false
                    }
                ),
            ]),
            Animated.parallel([
                Animated.spring(
                    left,
                    {
                        toValue: 0,
                        speed: 8,
                        bounciness: 10,
                        useNativeDriver: false
                    }
                ),
                Animated.spring(
                    right,
                    {
                        toValue: 0,
                        speed: 8,
                        bounciness: 10,
                        useNativeDriver: false
                    }
                ),
                Animated.timing(
                    opacity,
                    {
                        toValue: 1,
                        duration: 250,
                        useNativeDriver: false
                    }
                ),
            ])
        ]).start();
    }

    async function fetchRepositories() {
        setLoading(true);

        try {
            const { data }: { data: Repository[] } = await api.get(`users/${currentUser}/repos`);

            const ids = favoritesRepositories.map(rep => rep.id);
            const repoFiltered = data.filter(rep => !ids.includes(rep.id));
            setRepositories(data);
            setRepositoriesFiltered(repoFiltered)
        } catch (error) {
            Alert.alert("Ops!", "Ocorreu um erro ao buscar repositórios desse usuário!");
        }
        setLoading(false);

        startAnimation();
    }

    useEffect(() => {
        fetchRepositories();
    }, [currentUser]);

    useEffect(() => {
        const ids = favoritesRepositories.map(rep => rep.id);
        const repoFiltered = repositories.filter(rep => !ids.includes(rep.id));
        setRepositoriesFiltered(repoFiltered);
    }, [favoritesRepositories]);

    return (
        <>
            {
                loading
                    ? <ListSkeleton />
                    : (
                        <FlatList
                            data={repositoriesFiltered}
                            contentContainerStyle={{
                                padding: 16,
                                gap: 16,
                                flexGrow: 1
                            }}
                            renderItem={({item, index}) => (
                                <Animated.View
                                    style={{
                                        opacity,
                                        transform: [
                                            { translateX: index % 2 == 0 ? left : right }
                                        ]
                                    }}
                                >
                                    <CardComponent repository={item} showFavoriteButton />
                                </Animated.View>
                            )}
                            ListEmptyComponent={() => (
                                <EmptyContent>
                                    <EmptyIcon source={require("@/assets/images/caixa-vazia.png")} />
                                    <EmptyText>Nenhum repositório por aqui...</EmptyText>
                                </EmptyContent>
                            )}
                        />
                    )
            }
        </>
    );
}
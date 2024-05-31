import { Linking, StatusBar, View } from "react-native";
import { ButtonBack, Container, Content, Dot, FavoriteButton, FavoriteButtonText, Footer, Header, RepositoryDescription, RepositoryName, RepositoryNameBold, SeeRepositoryButton, SeeRepositoryButtonText, TechnologyText, TechnologyView, Title } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Repository } from "@/@types/env";
import { useRepositories } from "@/contexts/RepositoriesProvider";

export default function DetailsScreen() { 
    const { handleFavoriteRepository, favoritesRepositories } = useRepositories();

    const { data } = useLocalSearchParams<{ data: string }>();

    const repository: Repository = JSON.parse(data || "");

    const [favorited, setFavorited] = useState(false);

    useEffect(() => {
        setFavorited(favoritesRepositories.some(rep => rep.id == repository.id));
    }, []);

    function renderRepositoryName(repositoryName: string): React.ReactNode {
        const repositoryNameArray = repositoryName.split("/");
        const length = repositoryNameArray.length;

        return (
            <RepositoryName>
                { repositoryNameArray.slice(0, length - 1).join("/") }/

                <RepositoryNameBold>{ repositoryNameArray[length-1] }</RepositoryNameBold>
            </RepositoryName>
        );
    }

    function favoriteRespository() {
        handleFavoriteRepository(repository);
        setFavorited(!favorited);
    }

    return (
        <Container>
            <View>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <Header>
                    <ButtonBack onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#FFF" />
                    </ButtonBack>

                    <Title>Detalhes</Title>
                </Header>
                <Content>
                    { renderRepositoryName(repository.full_name) }

                    <RepositoryDescription>
                        { repository.description || "N/A" }
                    </RepositoryDescription>

                    <RepositoryDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.
                    </RepositoryDescription>

                    {
                        repository.language && (
                            <TechnologyView>
                                <Dot />
                                <TechnologyText >{ repository.language }</TechnologyText>
                            </TechnologyView>
                        )
                    }
                </Content>
            </View>
            <Footer>
                <SeeRepositoryButton onPress={() => Linking.openURL(repository.html_url)}>
                    <SeeRepositoryButtonText>Ver repositório</SeeRepositoryButtonText>
                    <Ionicons name="link" size={24} color="#1976D2" />
                </SeeRepositoryButton>

                <FavoriteButton
                    onPress={favoriteRespository}
                    favorited={favorited}
                >
                    <FavoriteButtonText>{ favorited ? "Desfavoritar" : "Favoritar" }</FavoriteButtonText>
                    <Ionicons name={favorited ? "star-outline" : "star"} size={24} color="#000" />
                </FavoriteButton>
            </Footer>
        </Container>
    );
}
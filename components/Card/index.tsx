import { Ionicons } from "@expo/vector-icons";
import { ButtonFavorite, ButtonFavoriteText, Card, CardBody, CardFooter, CardHeader, Dot, FavoriteCounter, FavoriteCounterView, OwnerAvatar, RepositoryDescription, RepositoryName, RepositoryNameBold, TechnologyText, TechnologyView } from "./styles";
import { router } from "expo-router";
import { useState } from "react";
import { Repository } from "@/@types/env";
import { useRepositories } from "@/contexts/RepositoriesProvider";
import { Animated } from "react-native";

interface CardComponentProps {
    repository: Repository,
    showFavoriteButton?: boolean,
    removingAction?: (repository: Repository) => void,
}

export default function CardComponent({ repository, showFavoriteButton }: CardComponentProps) {
    const { handleFavoriteRepository } = useRepositories();

    const [deslocation] = useState(new Animated.Value(0));
    const [opacity] = useState(new Animated.Value(1));
    const [removing, setRemoving] = useState(false);

    function removingAnimation() {
        Animated.parallel([
            Animated.timing(
                deslocation,
                {
                    toValue: -200,
                    duration: 250,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                opacity,
                {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: false
                }
            ),
        ]).start();
    }

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

    async function favoriteRespository() {
        setRemoving(true);
        removingAnimation();
        
        setTimeout(() => {
            handleFavoriteRepository(repository);
            setRemoving(false);
        }, 200);
    }

    return (
        <Animated.View
            style={{
                opacity,
                transform: [ { translateX: deslocation } ]
            }}
        >
            <Card
                onPress={() => 
                    router.navigate({
                        pathname: "details",
                        params: {
                            data: JSON.stringify(repository)
                        }
                    })
                }
                style={!removing && {
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowColor: "#000",
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 1
                }}
            >
                <CardHeader>
                    { renderRepositoryName(repository.full_name) }

                    <OwnerAvatar source={{ uri: repository.owner.avatar_url }} />
                </CardHeader>
                <CardBody>
                    <RepositoryDescription>
                        { repository.description || "N/A" }
                    </RepositoryDescription>
                </CardBody>
                <CardFooter>
                    {
                        showFavoriteButton && (
                            <ButtonFavorite onPress={favoriteRespository}>
                                <Ionicons name="star" size={20} color="#FFD02C" />
                                <ButtonFavoriteText>Favoritar</ButtonFavoriteText>
                            </ButtonFavorite>
                        )
                    }

                    <FavoriteCounterView>
                        <Ionicons name="star" size={20} color="#FFD02C" />
                        <FavoriteCounter>{ repository.stargazers_count }</FavoriteCounter>
                    </FavoriteCounterView>

                    <TechnologyView>
                        <Dot style={{ opacity: repository.language ? 1 : 0 }} />
                        <TechnologyText style={{ opacity: repository.language ? 1 : 0 }}>{ repository.language || "N/A" }</TechnologyText>
                    </TechnologyView>
                </CardFooter>
            </Card>
        </Animated.View>
    );
}
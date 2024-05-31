import { FavoritedButtonProps } from "@/@types/env";
import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
    background-color: #FFFFFF;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
`;

export const CardHeader = styled.View`
    padding-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #DADADA;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const RepositoryName = styled.Text`
    font-family: "inter-regular";
    font-size: 12px;
    color: #070707;
`;

export const RepositoryNameBold = styled(RepositoryName)`
    font-family: "inter-bold";
`;

export const OwnerAvatar = styled.Image`
    width: 29px;
    height: 29px;
    border-radius: 500px;
`;

export const CardBody = styled.View`
    padding-vertical: 16px;
`;

export const RepositoryDescription = styled.Text`
    font-family: "inter-regular";
    font-size: 12px;
    line-height: 15px;
    color: #9A9A9A;
`;

export const CardFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const DefaultView = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const ButtonFavorite = styled.TouchableOpacity<FavoritedButtonProps>`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.favorited ? "#FFF" : "#FAF3DC"};
    border: ${props => props.favorited ? 1 : 0}px;
    border-color: #FFD02C;
    padding: 10px;
    border-radius: 4px;
`;

export const ButtonFavoriteText = styled.Text`
    color: #FFD02C;
    font-family: "inter-bold";
    font-size: 12px;
`;

export const FavoriteCounterView = styled(DefaultView)``;

export const FavoriteCounter = styled.Text`
    font-family: "inter-regular";
    font-size: 12px;
    color: #9A9A9A;
`;

export const TechnologyView = styled(DefaultView)``;

export const Dot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 500px;
    background-color: #F22828;
`;

export const TechnologyText = styled(FavoriteCounter)``;
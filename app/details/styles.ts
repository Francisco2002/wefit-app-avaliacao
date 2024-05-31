import { FavoritedButtonProps } from "@/@types/env";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
`;

export const Header = styled.View`
    background-color: #000000;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
`;

export const ButtonBack = styled.TouchableOpacity`
    margin-right: 16px;
`;

export const Title = styled.Text`
    font-family: "roboto-medium";
    font-size: 20px;
    color: #FFF;
`;

export const Content = styled.ScrollView`
    padding: 16px;
    background-color: #FFFFFF;
`;

export const RepositoryName = styled.Text`
    font-family: "inter-regular";
    font-size: 20px;
    color: #070707;
    margin-bottom: 16px;
`;

export const RepositoryDescription = styled.Text`
    font-family: "inter-regular";
    font-size: 16px;
    line-height: 19px;
    color: #9A9A9A;
    margin-bottom: 16px;
`;

export const RepositoryNameBold = styled(RepositoryName)`
    font-family: "inter-bold";
`;

export const TechnologyView = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Dot = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 500px;
    background-color: #F22828;
`;

export const TechnologyText = styled.Text`
    font-family: "inter-regular";
    font-size: 14px;
    color: #9A9A9A;
`;

export const Footer = styled.View`
    background-color: #FFF;
    padding: 16px;
    gap: 10px;
`;

const DefaultButton = styled.TouchableOpacity<FavoritedButtonProps>`
    padding: 8px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
`;

const DefaultButtonText = styled.Text`
    font-size: 15px;
    font-family: "roboto-regular";
    text-transform: uppercase;
`;

export const SeeRepositoryButton = styled(DefaultButton)``;

export const SeeRepositoryButtonText = styled(DefaultButtonText)`
    color: #1976D2;
`;

export const FavoriteButton = styled(DefaultButton)`
    background-color: ${props => props.favorited ? "#FFF" : "#FFD02C"};
    border-radius: 4px;
    border: ${props => props.favorited ? 1 : 0}px;
    elevation: ${props => props.favorited ? 0 : 2};
`;

export const FavoriteButtonText = styled(DefaultButtonText)``;
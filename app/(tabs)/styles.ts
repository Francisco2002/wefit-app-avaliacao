import styled from "styled-components/native";

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background-color: #FFF;
`;

export const Title = styled.Text`
    font-family: "roboto-medium";
    font-size: 20px;
    color: #000000DE;
`;

export const ConfigButton = styled.TouchableOpacity`
    padding: 12px;
`;

export const EmptyContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const EmptyIcon = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
`;

export const EmptyText = styled.Text`
    font-family: "roboto-medium";
    text-align: center;
    font-size: 16px;
`;
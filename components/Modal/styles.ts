import styled from "styled-components/native";

export const ModalContainer = styled.View`
    background-color: rgba(0,0,0,.5);
    flex: 1;
    justify-content: flex-end;
`;

export const ModalContent = styled.View`
    background-color: #FFFFFF;
    padding: 16px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

export const ModalHeader = styled.View`
    padding: 16px;
    padding-top: 0;
`;

export const Indicator = styled.View`
    border: 1px;
    border-color: #E0E0E0;
    background-color: #E0E0E0;
    align-self: center;
    width: 30px;
    height: 6px;
    border-radius: 12px;
`;

export const Text = styled.Text`
    font-family: "roboto-regular";
    color: #000000DE;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Field = styled.View`
    background-color: #0000000F;
    padding: 8px 12px;
    border-bottom-width: 1px;
    border-bottom-color: #0000006B;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
`;

export const Label = styled.Text`
    font-family: "roboto-regular";
    color: #00000099;
    font-size: 12px;
`;

export const Input = styled.TextInput`
    color: #000000DE;
    font-family: "roboto-regular";
    font-size: 16px;
`;

export const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
`;
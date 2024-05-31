import { useRepositories } from "@/contexts/RepositoriesProvider";
import { useState } from "react";
import { Modal } from "react-native";
import { ButtonGroup, Input, Text, ModalContainer, ModalContent, Field, Label, ModalHeader, Indicator } from "./styles";
import Button from "../Button";

interface ModalSearchProps {
    open: boolean,
    handleClose: () => void
}

export default function ModalSearch({ open, handleClose }: ModalSearchProps) {
    const { setCurrentUser, currentUser } = useRepositories();
  
    const [search, setSearch] = useState(currentUser);

    function handleSearch() {
        setCurrentUser(search);
        handleClose();
    }

    return (
        <Modal
            transparent
            visible={open}
            onRequestClose={handleClose}
            animationType="slide"
        >
            <ModalContainer>
                <ModalContent>
                    <ModalHeader>
                        <Indicator />
                    </ModalHeader>
                    
                    <Text>Alterar usuário selecionado</Text>

                    <Field>
                        <Label>Nome do usuário</Label>
                        <Input
                            onChangeText={setSearch}
                            value={search}
                            onSubmitEditing={handleSearch}
                        />
                    </Field>

                    <ButtonGroup>
                        <Button
                            variant='outline'
                            color='#1976D2'
                            onPress={handleClose}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant='solid'
                            color='#1976D2'
                            textColor='#FFF'
                            onPress={handleSearch}
                        >
                            Salvar
                        </Button>
                    </ButtonGroup>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
}
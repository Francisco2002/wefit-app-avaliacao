import { Repository } from "@/@types/env";
import { getFavoriteRepositories, persistFavoritesRepositories } from "@/store";
import React, { ProviderProps, createContext, useContext, useEffect, useState } from "react";

interface RepositoriesContextType {
    currentUser: string;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
    favoritesRepositories: Repository[],
    handleFavoriteRepository: (repository: Repository) => void;
}

const RepositoriesContext = createContext<RepositoriesContextType | undefined>(undefined);

export default function FavoritesRepositoriesProvider({ children }: ProviderProps<typeof RepositoriesContext | null>) {
    const [favoritesRepositories, setFavoritesRepositories] = useState<Repository[]>([]);
    const [currentUser, setCurrentUser] = useState("appswefit");

    function handleFavoriteRepository(repository: Repository) {
        if(favoritesRepositories.some(rep => rep.id == repository.id)) {
            setFavoritesRepositories(favoritesRepositories.filter(rep => rep.id != repository.id));
        } else {
            setFavoritesRepositories([...favoritesRepositories, repository]);
        }
    }

    useEffect(() => {
        persistFavoritesRepositories(favoritesRepositories);
    }, [favoritesRepositories]);

    useEffect(() => {
        async function init() {
            const data: Repository[] = await getFavoriteRepositories();

            setFavoritesRepositories(data);
        }

        init();
    }, []);

    return (
        <RepositoriesContext.Provider value={{ currentUser, setCurrentUser, favoritesRepositories, handleFavoriteRepository }}>
            {children}
        </RepositoriesContext.Provider>
    );
}

export function useRepositories() {
    const context = useContext(RepositoriesContext);
    if (!context) {
        throw new Error('setRepositories deve ser usado dentro de um RepositoriesContext');
    }
    return context;
}
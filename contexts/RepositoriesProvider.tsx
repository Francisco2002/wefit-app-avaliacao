import { Repository } from "@/@types/env";
import { getFavoriteRepositories, persistFavoritesRepositories } from "@/store";
import React, { ProviderProps, createContext, useContext, useEffect, useState } from "react";

interface RepositoriesContextType {
    currentUser: string;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
    favoritesRepositories: Repository[],
    handleFavoriteRepository: (repository: Repository) => void;
    charged: boolean;
}

const RepositoriesContext = createContext<RepositoriesContextType | undefined>(undefined);

export default function FavoritesRepositoriesProvider({ children }: ProviderProps<typeof RepositoriesContext | null>) {
    const [favoritesRepositories, setFavoritesRepositories] = useState<Repository[]>([]);
    const [currentUser, setCurrentUser] = useState("appswefit");
    const [charged, setCharged] = useState(false);

    function handleFavoriteRepository(repository: Repository) {
        let repositories = [];
        
        if(favoritesRepositories.some(rep => rep.id == repository.id)) {
            repositories = favoritesRepositories.filter(rep => rep.id != repository.id);
        } else {
            repositories = [...favoritesRepositories, repository];
        }

        persistFavoritesRepositories(repositories);
        setFavoritesRepositories(repositories);
    }

    useEffect(() => {
        async function init() {
            const data: Repository[] = await getFavoriteRepositories();

            setFavoritesRepositories(data);

            setTimeout(() => setCharged(true), 500);
        }

        init();
    }, []);

    return (
        <RepositoriesContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                favoritesRepositories,
                handleFavoriteRepository,
                charged
            }}
        >
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
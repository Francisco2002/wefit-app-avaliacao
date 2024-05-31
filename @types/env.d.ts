import { TouchableOpacityProps } from "react-native"

type Repository = {
    id: number,
    full_name: string,
    description: string,
    owner: {
        avatar_url: string
    },
    stargazers_count: number,
    language: string | null,
    html_url: string
}

interface FavoritedButtonProps extends TouchableOpacityProps {
    favorited?: boolean
}
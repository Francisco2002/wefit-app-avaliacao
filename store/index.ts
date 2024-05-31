import { Repository } from '@/@types/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const persistFavoritesRepositories = async (repositories: Repository[]) => {
  try {
      const repositoriesJSON = JSON.stringify(repositories);
      await AsyncStorage.setItem('favorites-repositories', repositoriesJSON);
  } catch (e) {
    console.log("Error > ", e)
    // saving error
  }
};

export const getFavoriteRepositories: () => Promise<Repository[]> = async () => {
  try {
    const storage = await AsyncStorage.getItem('favorites-repositories');

    if (storage) {

      const result: any[] = JSON.parse(storage);

      return result;
    }
  } catch (e) {
    console.log("GET ERROR > ", e);
  }

  return [];
};
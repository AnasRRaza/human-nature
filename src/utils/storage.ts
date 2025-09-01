import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  AUTH_TOKEN = 'AUTH_TOKEN',
}

export const setItemToAS = async (key: STORAGE_KEYS, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getItemFromAS = async (key: STORAGE_KEYS) => {
  return await AsyncStorage.getItem(key);
};

export const removeItemFromAS = async (key: STORAGE_KEYS) => {
  await AsyncStorage.removeItem(key);
};

export const clearAS = async () => {
  await AsyncStorage.clear();
};

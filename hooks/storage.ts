import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveNewsCache(data: any) {
  try {
    await AsyncStorage.setItem('newsCache', JSON.stringify(data));
  } catch (e) {
    console.log('Error saving cache:', e);
  }
}

export async function getNewsCache() {
  try {
    const data = await AsyncStorage.getItem('newsCache');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log('Error reading cache:', e);
    return [];
  }
}

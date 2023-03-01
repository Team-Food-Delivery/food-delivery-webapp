import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    throw Error('Failed to set storage item.')
  }
}

const getStorageItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return value
    }
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

export {
  setStorageItem,
  getStorageItem
}
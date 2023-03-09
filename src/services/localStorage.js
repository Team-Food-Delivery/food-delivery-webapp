import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    throw Error('Failed to set storage item.')
  }
}

const setStorageObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
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

const getStorageObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

const mergeStorageItem = async (key, value) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value))

    //Delete after successful testing
    const currentUser = await AsyncStorage.getItem(key)

    console.log(currentUser)
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

export {
  setStorageItem,
  setStorageObject,
  getStorageItem,
  getStorageObject,
  mergeStorageItem
}
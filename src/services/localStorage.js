import AsyncStorage from '@react-native-async-storage/async-storage';

/*
  sample local storage JSON:
  pass key into storage function for below JSON, 'userAuth'
  {
    email: 'test@test.com,
    authToken: 'aijoij32j4',
    loggedIn: true
  }
*/

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
    console.log(value)
    return value !== null ? value : null;
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

const getStorageObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

const mergeStorageItem = async (key, value) => {
  try {
    console.log(value)
    await AsyncStorage.mergeItem(key, JSON.stringify(value))

    //Delete after successful testing
    const currentUser = await getStorageObject(key)

    console.log('currentuser:' ,currentUser)
  } catch(e) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

const removeStorageItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch(err) {
    throw Error(`Incorrect key or doesn't exist.`)
  }
}

export {
  setStorageItem,
  setStorageObject,
  getStorageItem,
  getStorageObject,
  mergeStorageItem,
  removeStorageItem
}
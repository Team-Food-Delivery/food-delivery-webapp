import { FOOD_DELIVERY_API } from '@env';
import { getStorageObject } from './localStorage';
//import useFetch from '../components/utiities/useFetch';

export const postRequest = async (url, body) => {
  if (!url || !body) return;

  try {
    const jwt = await getStorageObject('userAuth');
    
    const response = await fetch(`${FOOD_DELIVERY_API}${url}`, {
      method:'POST',
      headers: {
        'Authorization': `Bearer ${jwt.jwtToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if(!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return await response.json();

  } catch(e) {
    console.log(e)
  }
}
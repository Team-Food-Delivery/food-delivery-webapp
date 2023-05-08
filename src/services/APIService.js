import { FOOD_DELIVERY_API } from '@env';
import { getStorageObject } from './localStorage';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";

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

export const useFetchAddress = (endpoint, searchClicked) => {
  let active = true;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState()

  useEffect(() => {
    if(!endpoint || !searchClicked) return;
    const fetchData = async () => {
      if (active) setLoading(true);

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        filterAddresses(data.items);
      } catch(err) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    function filterAddresses(responseData) {
      let addresses = [];
      
      if(!loading) {
        responseData.forEach(item => {
          if(item.address.countryCode === 'USA' && item.resultType === "houseNumber") {
            addresses.push(item.address);
          }
        })
      }
      if (active) setData(addresses);
    }

    fetchData();

    return () => {
      active = false;
    }
  }, [endpoint])

  return { data, loading, error }
};

export const useFetchStores = (endpoint, body={}, method='POST') => {
  // https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
  let active = true;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { authData } = useContext(AuthContext);
  // Need to save data and errors in context or in global state
  useEffect(() => {
    if(!endpoint) return;
    const fetchData = async () => {
      if (active) setLoading(true);
      
      try {
        const response = await fetch(`${FOOD_DELIVERY_API}${endpoint}`, {
          method,
          headers: {
              Authorization: `Bearer ${authData.jwtToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        const data = await response.json();
        
        if (active) setData(data);
      } catch(err) {
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchData();

    return () => {
      active = false;
    }
  }, [endpoint])

  return { data, loading, error }
};
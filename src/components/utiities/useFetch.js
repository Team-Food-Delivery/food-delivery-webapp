import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { FOOD_DELIVERY_API } from '@env';

const useFetch = (endpoint, body={}, method='POST') => {
  // https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
  let active = true;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState()
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

export default useFetch;
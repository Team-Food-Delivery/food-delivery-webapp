import { useState, useEffect } from 'react';

const useFetch = (url, option={}) => {
  // https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
  let active = true;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState()

  // Need to save data and errors in context or in global state
  useEffect(() => {
    if(!url) return;
    const fetchData = async () => {
      if (active) setLoading(true);

      try {
        const response = await fetch(url, option);
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
  }, [url])

  return { data, loading, error }
};

export default useFetch;
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  let isFetching = false;
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);

  // Need to save data and errors in context or in global state
  useEffect(() => {
    if(!url) return;

    const fetchData = async () => {
      setStatus('fetching');

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setStatus('fetched');
        if(isFetching) return;
      } catch(err) {
        if(isFetching) return;
      }
    }

    fetchData();

    return () => {
      isFetching = true;
    }
  }, [url])

  return { status, data }
};

export default useFetch;
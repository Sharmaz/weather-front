import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = await response.json();
        setWeatherData(json);
        setLoading(false);
        setError('');
      } catch (err) {
        setLoading(false);
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    fetchData();
  }, [url]);

  return { weatherData, loading, error };
};

export default useFetch;

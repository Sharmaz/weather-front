import useFetch from '../hooks/useFetch';
import config from '../config';
import Card from './Card';

function PopularPlace({ city }) {
  const { weatherData, loading, error } = useFetch(`${config.baseUrl}/weather/${city}`, {});

  if (error) return <h1>{`Error: ${error}`}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="m-8">
      <Card weatherData={weatherData} />
    </div>
  );
}

export default PopularPlace;

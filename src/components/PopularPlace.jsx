import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import config from '../config';
import Card from './Card';

function PopularPlace({ city }) {
  const { weatherData, loading, error } = useFetch(`${config.baseUrl}/weather/${city}`, {});
  const navigate = useNavigate();

  const goToDetailPage = (place) => {
    navigate(`/places/${place}`);
  };

  if (error) return <h1>{`Error: ${error}`}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      className="m-8 cursor-pointer"
      onClick={() => goToDetailPage(city)}
      aria-hidden="true"
    >
      <Card weatherData={weatherData} />
    </div>
  );
}

export default PopularPlace;

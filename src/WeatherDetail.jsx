import { useParams, Link } from 'react-router-dom';
import config from './config';
import useFetch from './hooks/useFetch';

function WeatherDetail() {
  const { city } = useParams();
  const { weatherData, loading, error } = useFetch(`${config.baseUrl}/weather/${city}`, {});

  if (error) return <h1>{`Error: ${error}`}</h1>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-orange-500 text-center my-8">{`Weather in ${city.toUpperCase()}`}</h1>
      <div className="flex xs:flex-col flex-wrap justify-center items-center">
        {
          weatherData.list.map((item, index) => {
            const onlyDate = item.dt_txt.split(' ');
            if (weatherData.list[index + 1]) {
              const onlyDate2 = weatherData.list[index + 1].dt_txt.split(' ');
              if (onlyDate[0] !== onlyDate2[0]) {
                return (
                  <div
                    className="bg-slate-800 rounded-lg p-4 shadow-md w-[320px] text-slate-400 m-8"
                    key={item.dt}
                  >
                    <h2>{onlyDate[0]}</h2>
                    <div className="">
                      {`${item.main.temp_min} °C - ${item.main.temp_max} °C`}
                    </div>
                    <div className="flex items-center">
                      <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather-icon" width={50} height={50} />
                      <h2 className="text-slate-400">
                        {item.weather[0].description.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                );
              }
            }
          })
        }
      </div>
      <div className="flex justify-center items-center">
        <Link to="..">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WeatherDetail;

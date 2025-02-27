function Card({ weatherData }) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-md max-w-[320px]">
      <h1 className="text-4xl font-bold text-orange-500">{`Weater in ${weatherData.city.name}`}</h1>
      <h2 className="text-slate-400 mt-4 text-2xl font-bold">{`${weatherData.list[0].main.temp} °C`}</h2>
      <div className="flex items-center">
        <h2 className="text-slate-400">
          {weatherData.list[0].weather[0].description.toUpperCase()}
        </h2>
        <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt="weather-icon" width={50} height={50} />
      </div>
    </div>
  );
}

export default Card;
